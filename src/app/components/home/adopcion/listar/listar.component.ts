import { Component, OnInit } from '@angular/core';
import { AdopcionService } from '../../../../services/adopcion.service';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
	public  items: Observable<any[]>;
   public seleccionado:any;
  constructor(private _adopcion: AdopcionService) {
  	 this.items = this._adopcion.getPersonas();
  	 console.log(this.items)
  }

  ngOnInit() {
  }
   public borrar(){
    this._adopcion.eliminar(this.seleccionado);
  }

}
