import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {}
  private username;
  private password;

  ngOnInit() {
  }

  loginEvent(value: any) {
    this.username = value.username.toString();
    this.password = value.password.toString();

    // think we need a shared service here

    console.log(this.username);
    console.log(this.password);

  }

}
