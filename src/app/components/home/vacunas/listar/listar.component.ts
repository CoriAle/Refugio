import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {Observable} from "rxjs/Observable";
import { VacunaService } from '../../../../services/vacuna.service';
import 'rxjs/Rx';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarVComponent implements OnInit {
	 public items: Observable<any[]>;
   public seleccionado:any;
  constructor(public db: AngularFireDatabase, private _vacuna: VacunaService) { 
  		 this.items = this.getVacunas();
  }

getVacunas () {
    return this.db.list(`Vacunas`).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).mergeMap((tours:any) => {

            // The array of tours is going to be mapped to an observable,
            // so mergeMap is used.

            return Observable.forkJoin(

                // Map the tours to the array of observables that are to
                // be joined. Note that forkJoin requires the observables
                // to complete, so first is used.

                tours.map((tour:any) => this.db
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
  ngOnInit() {
  }
 public borrar(){
    this._vacuna.eliminar(this.seleccionado);
  }
}
