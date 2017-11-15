import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor( private auth: AuthService, private router: Router) {
  		 auth.user.map(user => {
                  /// Set an array of user roles, ie ['admin', 'author', ...]
                  return  _.get(user, 'nombre')
                })
                .subscribe((authorized )=>{
                	
                     if (authorized) {
                    this.router.navigate(['./home']);
                   }
                })
   }

  ngOnInit() {
  }
	public login() {
			this.auth.googleLogin().then(()=>{
				this.router.navigate(['./home']);
			})
	}
}
