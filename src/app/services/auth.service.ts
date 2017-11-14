import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Usuario } from '../models/usermodel';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthService {
	user: BehaviorSubject<Usuario> = new BehaviorSubject(null)
   constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase) {
   	
   	this.afAuth.authState
        .map(auth => {
          if (auth) {
            /// signed in
            this.db.object('users/' + auth.uid).valueChanges()
            .subscribe((user:any) => 
            	{
            		
            		this.user.next(user)
          			
            	}
            	);
            return this.db.object('users/' + auth.uid).valueChanges()
          } else {
            /// not signed in
            return Observable.of(null)
          }
        })
        .subscribe((user:any) => {
  
          this.user.next(user)
      
        })
     
    }
 googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      return this.afAuth.auth.signInWithPopup(provider)
        .then(credential =>  {
        	
            this.updateUser(credential.user)
        })
    }
    signOut() {
      this.afAuth.auth.signOut()
    }
    //// Update user data ////
    /// updates database with user info after login
    /// only runs if user role is not already defined in database
    private updateUser(authData) {
    
      const userData = new Usuario(authData)
 
      const ref = this.db.object('users/' + authData.uid)
     
      ref.valueChanges()
         .subscribe((user:any) => {
          if (!user) {
            ref.update(userData)
          }
      })
    }
}
