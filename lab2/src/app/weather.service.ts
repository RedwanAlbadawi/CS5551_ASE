import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class Temperature {

  urlTemp = 'http://api.wunderground.com/api/4bbbc25f4f5946dd/conditions/q/';
  urlHourlyForcast = 'http://api.wunderground.com/api/36b799dc821d5836/hourly/q/';
  constructor(private http: HttpClient) {

  }
  getForecast(state , city) {
    // need to use http get method to hit the required API
    return this.http.get(this.urlHourlyForcast  + state + '/' + city + '.json');
  }

  getTemperature(state , city) {

    return this.http.get(this.urlTemp + state + '/' + city + '.json');
  }
}
