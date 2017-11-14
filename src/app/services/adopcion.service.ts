import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class AdopcionService {

	URL:string = "https://proyecto-5ded8.firebaseio.com/Persona";
   constructor(	private http:Http, public db: AngularFireDatabase) { }
    getPersona(key$: string){
  		let url =`${this.URL}/${key$}.json`;
  		return this.http.get(url)
  			.map(res=>res.json())
  	}
  	update(key$: string, persona:any){
	  	let itemsRef = this.db.list('Persona');
	      itemsRef.update( key$,persona);
  	}
  	save(persona: any){
      
     let itemsRef = this.db.list('Persona');
      itemsRef.push(persona);
      
	  }
    
    getPersonas(){
      return this.db.list(`Persona`).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    }
    eliminar(key){
      const itemsRef = this.db.list('Persona');
  // to get a key, check the Example app below
  console.log(key);
    itemsRef.remove(key);
    }

}
