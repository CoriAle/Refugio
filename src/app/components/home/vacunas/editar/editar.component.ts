import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VacunaService } from '../../../../services/vacuna.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarVComponent implements OnInit {
	 public forma: FormGroup;
	  public alerta:boolean = false;
	 public id:any; 
	  public vacuna:any;
  constructor(private _vacuna: VacunaService, private router: Router, public activatedRoute: ActivatedRoute) { 
  	
      				this.forma = new FormGroup({
				      'nombre': new FormControl('', Validators.required),
				      'funcion': new FormControl('', Validators.required),
				      'fecha': new FormControl('', Validators.required)
    });
  		 this.activatedRoute.params.map(par=> par.id ).subscribe(p=>{
      		 console.log(p, "p");
      		 this.id = p;
      		_vacuna.getVacuna(p).subscribe(data=>{
      				console.log(data);
      				this.vacuna = data;
      				this.forma = new FormGroup({
				      'nombre': new FormControl(this.vacuna.nombre, Validators.required),
				      'funcion': new FormControl(this.vacuna.funcion, Validators.required),
				      'fecha': new FormControl(this.vacuna.fecha, Validators.required)
    });
      		},
      		error=>{
      			console.error(error);
      		});
    });
  	
  }

  ngOnInit() {
  }

  	public guardar(){
      this.alerta = true;
      console.log(this.forma.value);
   		this._vacuna.update(this.id, this.forma.value);
      setTimeout(()=>{this.alerta = false;
      	 this.router.navigate(['./home/vacuna/listar']);
      },3000);
	}

}
