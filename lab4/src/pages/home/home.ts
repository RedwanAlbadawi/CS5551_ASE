import { Component } from '@angular/core';
// import { AlertController} from "ionic-angular";
import { ViewChild } from "@angular/core";
import { NavController} from "ionic-angular";
import { ContactPage } from "../contact/contact";
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('username') username;
  @ViewChild('password') password;
  // alert: any;

  // constructor (public alertCon: AlertController) {}

  constructor(public navCtrl: NavController, private firebaseauth: AngularFireAuth) {}

  async loginUser() {
    console.log(this.username.value);
    console.log(this.password.value);

    try {
      this.firebaseauth.auth.signInWithEmailAndPassword(this.username.value, this.password.value).then(() => {
        this.navCtrl.push(ContactPage);
      }).catch(()=>{
        alert("Try again. Invalid Credentials");
      })
    }
    catch(e){
      console.error(e);
    }

/*    if (this.username.value === 'admin' && this.password.value === 'admin') {
      console.log('admin');

      this.alert = await this.alertCon.create({
        title: 'Login Successful',
        message: this.username.value + ' has been logged in.',
        buttons: ['Ok']
      });

    }
    else {
      this.alert = await this.alertCon.create({
        title: 'Login Failed',
        message: 'Unable to login user.',
        buttons: ['Ok']
      });
    }
    this.alert.present();*/
}
}
