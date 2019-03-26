import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  email: string;
  password: string;

  ngOnInit() {
  }

  login() {
    if (this.email !== '' && this.password !== '') {
      this.http.post('http://localhost:3000/api/login', {name: this.email, email: this.password})
        .subscribe((data: any) => {
          localStorage.setItem('auth_token', data.token);
          this.router.navigate(['/home']);
          console.log(data.token);
        });
    } else {
      alert('Invalid credentials');
    }
  }
}
