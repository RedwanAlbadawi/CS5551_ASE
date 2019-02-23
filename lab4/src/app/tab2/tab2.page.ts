import {Component, ViewChild} from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public alertCon1: AlertController) {}

  @ViewChild('username') username;
  @ViewChild('emailAdd') emailAdd;
  @ViewChild('pNumber') phoneNumber;
  @ViewChild('password') password;
  @ViewChild('Cpassword') Cpassword;

  async registerUser () {
    if (this.username.value !== '' && this.emailAdd.value !== '' && this.phoneNumber.value !== '' && this.password.value !== '' &&
        this.Cpassword.value !== '' && (this.password.value === this.Cpassword.value)) {
      console.log(this.username.value);
      console.log(this.emailAdd.value);
      console.log(this.phoneNumber.value);
      console.log(this.password.value);
      console.log(this.Cpassword.value);

      const alert = await this.alertCon1.create({
        header: 'New User Registered',
        message: this.username.value + ' has been registered.',
        buttons: ['Ok']
      });
      alert.present();

    }

  }

}
