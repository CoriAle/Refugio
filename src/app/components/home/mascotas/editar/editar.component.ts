import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import  {MascotaService} from '../../../../services/mascota.service'
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarMComponent implements OnInit {
	id:any;
	mascota:any;
	items: Observable<any[]>;
  vacunas: Observable<any[]>;

  constructor(private _mascota: MascotaService, private router: Router,  public activatedRoute: ActivatedRoute) { 
  	this.activatedRoute.params.map(par=> par.id ).subscribe(p=>{
           console.log(p, "p");
           this.id = p;

         if(this.id){
              _mascota.getMascota(p).subscribe(data=>{
              console.log(data);
              this.mascota = data;
           	this.items = this._mascota.getDetalle(this.id);
           	console.log(this._mascota.getDetalle(this.id), "c")
           	this.vacunas=this._mascota.getVacunas(this.id);
          },
          error=>{
            console.error(error);
          });
         }
    });
  }

  ngOnInit() {
  }

}
