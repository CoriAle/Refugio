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

  items: Observable<any[]>;
  seleccionado: any;
  constructor(private _mascota: MascotaService) {
  	 this.items = this._mascota.getMascotas();

  }

  ngOnInit() {
  }

  borrar(){
    this._mascota.eliminar(this.seleccionado);
  }

}
