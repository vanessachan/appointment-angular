import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Login} from "../model/Login";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private  loggedIn:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  public loggedInUserSubject:BehaviorSubject<string>=new BehaviorSubject<string>("");


  constructor(private afAuth: AngularFireAuth, private router:Router, private http:HttpClient) { }

  signUp(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        // Sign up successful
      })
      .catch((error) => {
        // An error occurred
      });
  }

  // login(login:Login) {
  //   this.http.post<any>('http://localhost:8080/appointment',login).subscribe(
  //     (response)=>{
  //       console.log('ola');
  //       const token = response.token;
  //       console.log('token'+token);
  //       this.loggedIn.next(true);
  //       this.loggedInUserSubject.next(String(login.email));
  //       localStorage.setItem('token', token);
  //       this.router.navigate(['list']);
  //     },
  //     (error) =>{
  //       this.loggedIn.next(false);
  //       this.router.navigate(['']);
  //
  //   }
  //   )
  //
  // }

  login(login:Login) {
    this.afAuth.signInWithEmailAndPassword(login.email, login.password)
      .then(() => {
        console.log("login success");

        // Login successful
      })
      .catch((error) => {
        console.log("error login");

        // An error occurred
      });
  }

  logout() {
    this.afAuth.signOut()
      .then(() => {
        // Logout successful
      })
      .catch((error) => {
        // An error occurred
      });
  }

  get isAuthenticated(): boolean {
    return this.afAuth.currentUser !== null;
  }
}
