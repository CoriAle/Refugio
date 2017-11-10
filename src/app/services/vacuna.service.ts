import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class VacunaService {

	URL:string = "https://proyecto-5ded8.firebaseio.com/Vacunas";
  constructor(	private http:Http) { }


    getVacuna(key$: string){
  		let url =`${this.URL}/${key$}.json`;
  		return this.http.get(url)
  			.map(res=>res.json())
  	}

}
