import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../../../services/mascota.service';
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarMComponent implements OnInit {

 public items: Observable<any[]>;
  public seleccionado: any;
  constructor(public _mascota: MascotaService) {
  	 this.items = this._mascota.getMascotas();

  }

  ngOnInit() {
  }

  public borrar(){
    this._mascota.eliminar(this.seleccionado);
  }

}
