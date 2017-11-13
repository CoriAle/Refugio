import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdopcionService } from '../../../../services/adopcion.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.css']
})
export class NuevaComponent implements OnInit {
	forma: FormGroup;
	alerta:boolean = false;
  id:any;
  adopcion:any;
  constructor(private _adopcion: AdopcionService, private router: Router,  public activatedRoute: ActivatedRoute) { 
  	this.forma = new FormGroup({
				      'nombre': new FormControl('', Validators.required),
				      'apellido': new FormControl('', Validators.required),
				      'edad': new FormControl('', Validators.required),
				      'correo': new FormControl('',  [
  											Validators.required, 
  											Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
  									   ]),
				      'direccion': new FormControl('', Validators.required),
				      'num_mascotas': new FormControl('', Validators.required),
				      'razon': new FormControl('', Validators.required),
    	});

     this.activatedRoute.params.map(par=> par.id ).subscribe(p=>{
           console.log(p, "p");
           this.id = p;

         if(this.id){
              _adopcion.getPersona(p).subscribe(data=>{
              console.log(data);
              this.adopcion = data;
              this.forma = new FormGroup({
              'nombre': new FormControl(this.adopcion.nombre, Validators.required),
              'apellido': new FormControl(this.adopcion.apellido, Validators.required),
              'edad': new FormControl(this.adopcion.edad, Validators.required),
              'correo': new FormControl(this.adopcion.correo,  [
                        Validators.required, 
                        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                       ]),
              'direccion': new FormControl(this.adopcion.direccion, Validators.required),
              'num_mascotas': new FormControl(this.adopcion.num_mascotas, Validators.required),
              'razon': new FormControl(this.adopcion.razon, Validators.required),
          });
          },
          error=>{
            console.error(error);
          });
         }
    });
  }

  ngOnInit() {
  }
  guardar(){
      this.alerta = true;
      console.log(this.forma.value);
      if(!this.id){
   		  this._adopcion.save(this.forma.value);
      }
      else{
        this._adopcion.update(this.id,this.forma.value);
      }
      setTimeout(()=>{this.alerta = false;
      	 this.router.navigate(['./home/adopcion/listar']);
      },3000);
	}

}

