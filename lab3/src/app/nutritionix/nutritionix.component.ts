import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-nutritionix',
  templateUrl: './nutritionix.component.html',
  styleUrls: ['./nutritionix.component.css']
})
export class NutritionixComponent implements OnInit {

  private searchterm;
  calories: string;
  sWeight: string;
  data: any;

  constructor(private http: HttpClient) { }

  SubmitEvent(value: any):void {
    this.searchterm = value.searchterm.toString();

    this.http.get('https://api.nutritionix.com/v1_1/search/%22' + this.searchterm +
                    '%22?results=0:1&fields=*&appId=2972d721&appKey=d1a617bbe2e43ec825625373764e27bf').subscribe((data) => {
this.data = data;
console.log(data);
    });
  }

  ngOnInit() {
  }

}
