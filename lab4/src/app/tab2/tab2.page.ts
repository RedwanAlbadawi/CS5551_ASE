import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild('username') username;
  @ViewChild('emailAdd') emailAdd;
  @ViewChild('pNumber') phoneNumber;
  @ViewChild('password') password;
  @ViewChild('Cpassword') Cpassword;

  registerUser () {
    if ((this.username.value !== null) && (this.password.value === this.Cpassword.value)) {
      console.log(this.username.value);
      console.log(this.emailAdd.value);
      console.log(this.phoneNumber.value);
      console.log(this.password.value);
      console.log(this.Cpassword.value);

    }

  }

}
