import { Component } from '@angular/core';
import { AlertController} from "ionic-angular";
import { ViewChild } from "@angular/core";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public alertCon1: AlertController) {
  }

  @ViewChild('username') username;
  @ViewChild('emailAdd') emailAdd;
  @ViewChild('pNumber') phoneNumber;
  @ViewChild('password') password;
  @ViewChild('Cpassword') Cpassword;
  alert: any;

  async registerUser() {
    if (this.username.value !== '' && this.emailAdd.value !== '' && this.phoneNumber.value !== '' && this.password.value !== '' &&
      this.Cpassword.value !== '' && (this.password.value === this.Cpassword.value)) {
      console.log(this.username.value);
      console.log(this.emailAdd.value);
      console.log(this.phoneNumber.value);
      console.log(this.password.value);
      console.log(this.Cpassword.value);

      this.alert = await this.alertCon1.create({
        title: 'New User Registered',
        message: this.username.value + ' has been registered.',
        buttons: ['Ok']
      });

    }
    else {

     this.alert = await this.alertCon1.create({
        title: 'Registration Failed',
        message: 'Failed to register new user',
        buttons: ['Ok']
      });

    }
    this.alert.present();

  }
}
