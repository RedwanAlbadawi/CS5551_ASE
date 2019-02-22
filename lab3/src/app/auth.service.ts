import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginStatus;

  constructor() {
    this.loginStatus = false;
  }

  logoutUserStatus() {
    this.loginStatus = false;
  }

  loginUserStatus() {
    this.loginStatus = true;
  }

  getStatusLogin() {
    return this.loginStatus;
  }
}
