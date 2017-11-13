import { Component, OnInit } from '@angular/core';
import  {FileItem} from '../../../../models/file-item'
import  {MascotaService} from '../../../../services/mascota.service'
@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.css']
})
export class NuevaMComponent implements OnInit {

	estaSobreDropZone: boolean = false;
	permiteCargar: boolean = true;
	archivos: FileItem[] = [];
  constructor(private _mascota: MascotaService) { }

  ngOnInit() {
  }
  cargarImagenesFirebase(){
  	this.permiteCargar = false;
  	this._mascota.cargar_imagenes_firebase(this.archivos)
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
	}

}
