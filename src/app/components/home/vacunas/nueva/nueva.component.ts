import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.css']
})
export class NuevaVComponent implements OnInit {
	 forma: FormGroup; //El formulario
  alerta:boolean = false;
  constructor(public db: AngularFireDatabase, private router: Router) {
  		 this.forma = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'funcion': new FormControl('', Validators.required),
      'fecha': new FormControl('', Validators.required)
    });
    // Fin Inicialización formulario


   }

  ngOnInit() {
  }
	guardar(){
      this.alerta = true;
      console.log(this.forma.value);
      let itemsRef = this.db.list('Vacunas');
      itemsRef.push(this.forma.value);
      setTimeout(()=>{
        this.alerta = false;
        this.router.navigate(['./home/vacuna/listar']);
      },3000);
	}
}
