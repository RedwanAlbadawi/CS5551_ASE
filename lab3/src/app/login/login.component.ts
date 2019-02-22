import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {}
  private username: string;
  private password: string;

  ngOnInit() {
  }

  loginEvent(value: any) {
    this.authService.logoutUserStatus();
    this.username = value.username.toString();
    this.password = value.password.toString();

    console.log(this.username)
    console.log(localStorage.getItem("U" + this.username));

    if (this.username === localStorage.getItem("U" + this.username) && this.password ===
      localStorage.getItem("U" + this.username)) {
      this.authService.loginUserStatus();
      console.log(this.authService.getStatusLogin() );
    }

  }

}
