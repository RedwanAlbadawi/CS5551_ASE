import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AuthService } from '../auth.service';
import {subscribeOn} from 'rxjs/operators';

@Component({
  selector: 'app-nutritionix',
  templateUrl: './nutritionix.component.html',
  styleUrls: ['./nutritionix.component.css']
})
export class NutritionixComponent implements OnInit {

  constructor(private http: HttpClient, private authService:AuthService) { }

  private searchterm;

  SubmitEvent(value: any) {
    this.searchterm = value.searchterm.toString();
    console.log(this.searchterm)
    return this.http.get('https://api.nutritionix.com/v1_1/search/%22' + this.searchterm +
                    '%22?results=0:1&fields=*&appId=2972d721&appKey=d1a617bbe2e43ec825625373764e27bf')
    .subscribe(data => {
      console.log('We got', data);
    })
  }

  ngOnInit() {
  }

}
