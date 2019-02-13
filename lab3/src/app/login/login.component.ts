import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  CurrentUser = '';
  UserPassword = '';

  LoginSubmit() {
    localStorage.setItem('CUser', this.CurrentUser);
    localStorage.setItem('UPass', this.UserPassword);
    console.log('CUser: ' + localStorage.getItem('CUser'));
    console.log('UPass: ' + localStorage.getItem('UPass'));
  }

  constructor() {

  }

  ngOnInit() {
  }

}
