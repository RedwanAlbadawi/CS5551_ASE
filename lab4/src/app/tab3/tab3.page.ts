import {Component, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  @ViewChild('places') places;
  data: any;

  constructor(private _http: HttpClient) {
  }

  seePlaces() {
    console.log(this.places.value);
    this._http.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=iowa&inputtype=textquery&fi' +
        'elds=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyCKcJGJvkHc-KkDBC-_xwZ5YgBcnf3Sxvo')
        .subscribe((data) => {
          this.data = data;
          console.log(data);
        });
  }

}
