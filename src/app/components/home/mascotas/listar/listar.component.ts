import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../../../services/mascota.service';
mport {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarMComponent implements OnInit {

  items: Observable<any[]>;
  constructor(private _mascota: MascotaService) {
  	 this.items = this._mascota.getMascotas();
  	 console.log(this.items)
  }

  ngOnInit() {
  }

}
