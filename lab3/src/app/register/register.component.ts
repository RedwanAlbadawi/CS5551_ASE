import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  private username;
  private password;
  private Cpassword;

  registerEvent(value: any) {
    this.username = value.username.toString();
    this.password = value.password.toString();
    this.Cpassword = value.Cpassword.toString();

    console.log(this.username);
    console.log(this.password);
    console.log(this.Cpassword);

    if (this.password === this.Cpassword && this.Cpassword !== '') {
      console.log('passwords match');
    }
  }

  ngOnInit() {
  }

}
