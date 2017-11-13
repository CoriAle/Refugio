import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FileItem } from '../models/file-item';


import * as firebase from "firebase"
@Injectable()
export class MascotaService {

	private CARPETA_IMAGENES: string = 'img';
  constructor(public af: AngularFireDatabase) { }

  listaUltimasImagenes(numberoImagenes: number){
  	return this.af.list(`/${ this.CARPETA_IMAGENES }`)
  }

  cargar_imagenes_firebase(archivos: FileItem[]){
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
  				this.guardarImagen({nombre: item.nombreArchivo, url: item.url});
  			}
  		 );
  	}	
  }

  private guardarImagen(imagen: any){
  	this.af.list(`/${ this.CARPETA_IMAGENES}`).push(imagen);
  }

}
