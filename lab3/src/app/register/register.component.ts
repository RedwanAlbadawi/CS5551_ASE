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
  logins = [];

  registerEvent(value: any) {
    this.username = value.username.toString();
    this.password = value.password.toString();
    this.Cpassword = value.Cpassword.toString();

    if (this.password === this.Cpassword && this.Cpassword !== '') {
      localStorage.setItem("U" + this.username, this.username);
      localStorage.setItem("P" + this.username, this.password);
      this.logins.push(localStorage.getItem("U" + this.username) + " was added as a user.");
    }
  }

  ngOnInit() {
  }

}
