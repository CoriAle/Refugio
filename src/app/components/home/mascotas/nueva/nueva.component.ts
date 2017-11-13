import { Component, OnInit } from '@angular/core';
import  {FileItem} from '../../../../models/file-item'
import  {MascotaService} from '../../../../services/mascota.service'
import  {AdopcionService} from '../../../../services/adopcion.service'
import  {VacunaService} from '../../../../services/vacuna.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.css']
})
export class NuevaMComponent implements OnInit {

	estaSobreDropZone: boolean = false;
	permiteCargar: boolean = true;
	archivos: FileItem[] = [];
	forma: FormGroup;
	alerta:boolean = false;
   items: Observable<any[]>;
   vacunas: Observable<any[]>;
   imageSrc:any;
 
  constructor(private _mascota: MascotaService, private _adopcion: AdopcionService,
                private _vacuna: VacunaService) {
  		  this.items = this._adopcion.getPersonas();
        this.vacunas =  this._vacuna.getVacunas();
      	this.forma = new FormGroup({
				      'nombre': new FormControl('', Validators.required),
				      'genero': new FormControl('Femenino', Validators.required),
				      'edad': new FormControl('', Validators.required),
				      'fecha_rescate': new FormControl('',  Validators.required, ),
				      'persona': new FormControl('', Validators.required),
				      'vacuna': new FormControl('', Validators.required),
    	});
   }

  ngOnInit() {
  }
  cargarImagenesFirebase(){
    console.log(this.forma.value);
  	
  	//this._mascota.cargar_imagenes_firebase(this.archivos)
  }
  guardar(){
    this.permiteCargar = false;
    console.log(this.forma.value);
    let mascota = this.forma.value;
    mascota.imagen = "f";
    console.log(mascota);
    this._mascota.cargar_imagenes_firebase(this.archivos, mascota)
  }
  limpiarArchivos(){
  	this.archivos = [];
  	this.permiteCargar = true;

  }
  archivoSobreDropZone(e:boolean){
  	this.estaSobreDropZone = e;
  }
	archivoDrop(e){
		console.log(e);
     var reader = new FileReader();
	}

   


}
