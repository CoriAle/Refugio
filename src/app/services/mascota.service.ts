import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FileItem } from '../models/file-item';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

import * as firebase from "firebase"
@Injectable()
export class MascotaService {

	private CARPETA_IMAGENES: string = 'img';
  constructor(public af: AngularFireDatabase) { }

  listaUltimasImagenes(numberoImagenes: number){
  	return this.af.list(`/${ this.CARPETA_IMAGENES }`)
  }

  cargar_imagenes_firebase(archivos: FileItem[], mascota: any){
  	console.log(archivos);
  	let storageRef = firebase.storage().ref();
  	for( let item of archivos){
  		item.estaSubiendo = true;
  		let uploadTask: firebase.storage.UploadTask = storageRef.child(`/${ this.CARPETA_IMAGENES }/${item.nombreArchivo}`)
  																.put(item.archivo);
  		uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
  			(snapshot:any)=> {item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes)*100; console.log("agui")},
  			(error)=> console.error(error),
  			()=>{
  				console.log("exito")
  				item.url = uploadTask.snapshot.downloadURL;
  				item.estaSubiendo = false;
          mascota.imagen = item.url;
  				this.guardarImagen(mascota);
  			}
  		 );
  	}
  }

  private guardarImagen(imagen: any){
    console.log(imagen, "servicio")
  	this.af.list(`Mascotas`).push(imagen);
  }

  getMascotas(){

    return this.af.list(`Mascotas`).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).mergeMap((tours:any) => {

            // The array of tours is going to be mapped to an observable,
            // so mergeMap is used.

            return Observable.forkJoin(

                // Map the tours to the array of observables that are to
                // be joined. Note that forkJoin requires the observables
                // to complete, so first is used.

                tours.map((tour:any) => this.af
                    .object(`/Proveedores/${tour.Proveedor}/nombre`).valueChanges().first()
                ),

                // Use forkJoin's results selector to match up the result
                // values with the tours.

                (...values) => {
                    tours.forEach((tour, index) => { tour.Proveedor = values[index]; });
                    return tours;
                }
            );
        });

  }


}
