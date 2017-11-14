import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  salir(){
  	this.auth.signOut();
  	this.router.navigate(['./log']);
  }

}
