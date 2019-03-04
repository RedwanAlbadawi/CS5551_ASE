import { Component } from '@angular/core';
import { ViewChild } from "@angular/core";
import { NavController} from "ionic-angular";
import { HomePage } from "../home/home";
import {AngularFireAuth} from 'angularfire2/auth';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navControl: NavController, private firebaseauth: AngularFireAuth) {
  }

  @ViewChild('emailAdd') emailAdd;
  @ViewChild('password') password;
  @ViewChild('Cpassword') Cpassword;
  alert = '';

  async registerUser() {
    this.alert = '';
    if (this.emailAdd.value !== '' && this.password.value !== '' && this.Cpassword.value !== ''
      && (this.password.value === this.Cpassword.value)) {

      try {
        this.firebaseauth.auth.createUserWithEmailAndPassword(this.emailAdd.value, this.password.value).then(() => {
          this.navControl.push(HomePage);
        }).catch(() =>
        {
          this.alert = "Invalid email/password should be of 6 characters";
        })
      }
      catch(e){
        console.error(e);
      }
    }
    else {
      this.alert = "Email and password required.  Both password fields should match";
    }
  }
}
