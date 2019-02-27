import { Component } from '@angular/core';
import { AlertController} from "ionic-angular";
import { ViewChild } from "@angular/core";

import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public alertCon1: AlertController, private firebaseauth: AngularFireAuth) {
  }

  @ViewChild('username') username;
  @ViewChild('emailAdd') emailAdd;
  @ViewChild('pNumber') phoneNumber;
  @ViewChild('password') password;
  @ViewChild('Cpassword') Cpassword;
  /*alertSuccess: any;*/

  async registerUser() {
    if (this.username.value !== '' && this.emailAdd.value !== '' && this.phoneNumber.value !== '' && this.password.value !== '' &&
      this.Cpassword.value !== '' && (this.password.value === this.Cpassword.value)) {

      try {
        this.firebaseauth.auth.createUserWithEmailAndPassword(this.emailAdd.value, this.password.value).then(function () {
          alert("Registration successful");
        }).catch(() =>
        {
          alert("invalid email/password should be of 6 characters");
        })
      }
      catch(e){
        console.error(e);
      }
    }
  }
}

/*
this.alertSuccess = await this.alertCon1.create({
  title: 'New User Registered',
  message: this.username.value + ' has been registered.',
  buttons: ['Ok']
});

else {

  this.alert = await this.alertCon1.create({
    title: 'Registration Failed',
    message: 'Failed to register new user',
    buttons: ['Ok']
  });


this.alert.present();*/
