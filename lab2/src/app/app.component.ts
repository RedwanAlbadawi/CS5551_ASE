import { Component} from '@angular/core';
// import {NgForm} from '@angular/forms';
// import {HttpClient} from '@angular/common/http';
import { Temperature } from './weather.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ Temperature ]
})
export class AppComponent {
  title = 'WeatherChecker';
  private state: string;
  private city: string;
  private tempData1: any;
  private hourlyData: any;
  // urlTemp = 'http://api.wunderground.com/api/4bbbc25f4f5946dd/conditions/q/';
  // urlHourly= 'http://api.wunderground.com/api/36b799dc821d5836/hourly/q/';

  constructor( private temp: Temperature) {

  }
 //  ngOnInit() {
//    const obs = this.http.get('http://api.wunderground.com/api/4bbbc25f4f5946dd/conditions/q/' + this.state + '/' + this.city + '.json');
//    obs.subscribe(() => console.log('http://api.wunderground.com/api/4bbbc25f4f5946dd/conditions/q/' + this.state + '/'
//    + this.city + '.json'));
//  }
//  }
//  CheckWeather(SCform: NgForm): void {
//    console.log('http://api.wunderground.com/api/4bbbc25f4f5946dd/conditions/q/' + this.state + '/' + this.city + '.json');
//  }


  CheckWeather(value: any) {



     this.state = value.state.toString();
     this.city = value.city.toString();


     this.temp.getTemperature(this.state , this.city).subscribe(tempdata => this.tempData1 = tempdata);

     this.temp.getForecast(this.state , this.city).subscribe(tempdata => this.hourlyData = tempdata);


  }

}
