import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {}
  private username = '';
  private password = '';

  ngOnInit() {
  }

  loginEvent(value: any) {
    this.username = value.username.toString();
    this.password = value.password.toString();

    console.log(this.username);
    console.log(this.password);

    if (this.username !== '' && this.password !== '') {
      this.authService.loginUserStatus();
      console.log(this.authService);
    }

  }

}
