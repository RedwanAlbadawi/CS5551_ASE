import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userDetails: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  details() {
    const token = localStorage.getItem('auth_token');
    console.log(token);
    const headers = new HttpHeaders().set ('auth_token', token);
    this.http.get('http://localhost:3000/api/posts', {headers})
      .subscribe(response => {
        this.userDetails = response.user;
        console.log(response);
      });
  }
}
