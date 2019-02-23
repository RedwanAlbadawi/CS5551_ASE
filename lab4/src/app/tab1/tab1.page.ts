import {Component, ViewChild} from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor (public alertCon: AlertController) {}

  async loginUser() {
    console.log(this.username.value);
    console.log(this.password.value);

    if (this.username.value === 'admin' && this.password.value === 'admin') {
      console.log('admin');

      const alert = await this.alertCon.create({
        header: 'Login Successful',
        message: this.username.value + ' has been logged in.',
        buttons: ['Ok']
      });
      alert.present();

    }

  }
}
