import { Component, OnInit } from '@angular/core';
import  {FileItem} from '../../../../models/file-item'
import  {MascotaService} from '../../../../services/mascota.service'
import  {AdopcionService} from '../../../../services/adopcion.service'
import  {VacunaService} from '../../../../services/vacuna.service'
import  {AuthService} from '../../../../services/auth.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from "rxjs/Observable";
import * as _ from 'lodash';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
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
   imageSrc:string = "";
   mascota: any;
   id: any;
   cancelar: boolean = false;
  constructor(private _mascota: MascotaService, private _adopcion: AdopcionService,
                private _vacuna: VacunaService,  private router: Router, 
                 public activatedRoute: ActivatedRoute, private auth: AuthService) {
        
            auth.user.map(user => {
                  /// Set an array of user roles, ie ['admin', 'author', ...]
              
                  return  _.has(_.get(user, 'roles'), 'admin')
                })
                .subscribe((authorized )=>{
                     if (!authorized) {
                    
                    this.router.navigate(['/']);
                   }
                })
         

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
        this.activatedRoute.params.map(par=> par.id ).subscribe(p=>{
           console.log(p, "p");
           this.id = p;

         if(this.id){
              _mascota.getMascota(p).subscribe(data=>{
              console.log(data);
              this.mascota = data;
              this.cancelar = true;
                this.imageSrc =this.mascota.imagen; 
               this.forma = new FormGroup({
              'nombre': new FormControl(this.mascota.nombre, Validators.required),
              'genero': new FormControl(this.mascota.genero, Validators.required),
              'edad': new FormControl(this.mascota.edad, Validators.required),
              'fecha_rescate': new FormControl(this.mascota.fecha_rescate,  Validators.required, ),
              'persona': new FormControl(this.mascota.persona, Validators.required),
              'vacuna': new FormControl(this.mascota.vacuna, Validators.required),
      });
          },
          error=>{
            console.error(error);
          });
         }
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
    this.alerta = true;
      console.log(this.forma.value);
      if(!this.id){
          console.log(this.forma.value);
          let mascota = this.forma.value;
          mascota.imagen = "f";
          console.log(mascota);
          this._mascota.cargar_imagenes_firebase(this.archivos, mascota)
    }
    else{
      let mascota = this.forma.value;
      if(this.cancelar){
         
         
          mascota.imagen = this.mascota.imagen;
          this._mascota.update(this.id,mascota);
      }
      else{
         mascota.imagen = "";
          this._mascota.updateImagen(this.archivos, mascota, this.id)
      }
    
     }
      setTimeout(()=>{this.alerta = false;
         this.router.navigate(['./home/mascota/listar']);
      },6000);
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
