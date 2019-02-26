import { Component } from '@angular/core';
import { AlertController} from "ionic-angular";
import { ViewChild } from "@angular/core";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('username') username;
  @ViewChild('password') password;
  alert: any;

  constructor (public alertCon: AlertController) {}

  async loginUser() {
    console.log(this.username.value);
    console.log(this.password.value);

    if (this.username.value === 'admin' && this.password.value === 'admin') {
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
    this.alert.present();
}
}
