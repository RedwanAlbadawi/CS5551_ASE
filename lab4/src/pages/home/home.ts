import { Component } from '@angular/core';
import { ViewChild } from "@angular/core";
import { NavController } from "ionic-angular";
import { ContactPage } from "../contact/contact";
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('username') username;
  @ViewChild('password') password;
  alert = '';

  constructor(public navCtrl: NavController, private firebaseauth: AngularFireAuth) {}

  async loginUser() {
    this.alert = '';
    console.log(this.username.value);
    console.log(this.password.value);

    if (this.username.value !== '' && this.password.value !== '') {
      try {
        this.firebaseauth.auth.signInWithEmailAndPassword(this.username.value, this.password.value).then(() => {
          this.navCtrl.push(ContactPage);
        }).catch(() => {
          this.alert = "Try again. Invalid Credentials";
        })
      } catch (e) {
        console.error(e);
      }
    }
    else {
      this.alert = "Email and Password required"
    }
  }
}
