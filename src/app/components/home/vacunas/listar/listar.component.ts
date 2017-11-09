import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {Observable} from "rxjs/Observable";
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarVComponent implements OnInit {
	 items: Observable<any[]>;
  constructor(public db: AngularFireDatabase) { 
  		 this.items = this.db.list(`Vacunas`).valueChanges();
  }

  ngOnInit() {
  }

}
