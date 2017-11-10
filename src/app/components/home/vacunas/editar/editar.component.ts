import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VacunaService } from '../../../../services/vacuna.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarVComponent implements OnInit {

  constructor(_vacuna: VacunaService, router: Router, public activatedRoute: ActivatedRoute) { 
  		 this.activatedRoute.params.map(par=> par.id ).subscribe(p=>{
      		 console.log(p, "p");
      		_vacuna.getVacuna(p).subscribe(data=>{
      				console.log(data);
      		},
      		error=>{
      			console.error(error);
      		});
    });
  }

  ngOnInit() {
  }

}
