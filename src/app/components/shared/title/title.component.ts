import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
 import {Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router, public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
   public salir(){
  	this.auth.signOut();
  	this.router.navigate(['./log']);
  }

}
