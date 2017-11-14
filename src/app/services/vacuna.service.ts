import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class VacunaService {

	URL:string = "https://proyecto-5ded8.firebaseio.com/Vacunas";
  constructor(	private http:Http, public db: AngularFireDatabase) { }


    getVacuna(key$: string){
  		let url =`${this.URL}/${key$}.json`;
  		return this.http.get(url)
  			.map(res=>res.json())
  	}
  	update(key$: string, vacuna:any){
	  	let itemsRef = this.db.list('Vacunas');
	      itemsRef.update( key$,vacuna);
  	}
    getVacunas () {
    return this.db.list(`Vacunas`).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    })
  }
    eliminar(key){
      const itemsRef = this.db.list('Vacunas');
  // to get a key, check the Example app below
  console.log(key);
    itemsRef.remove(key);
    }


}
