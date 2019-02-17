import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginStatus;
  private username;

  constructor() {
    this.loginStatus = false;
  }

  loginUserStatus() {
    this.loginStatus = true;
  }

  getStatusLogin() {
    return this.loginStatus;
  }
}
