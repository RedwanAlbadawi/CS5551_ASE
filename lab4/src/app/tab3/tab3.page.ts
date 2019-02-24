import {Component, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  @ViewChild('searchTerm') searchTerm;
  data: any;
  data1: any;

  constructor(private http: HttpClient) {}

  searchTerms() {

    console.log(this.searchTerm.value);
    this.http.get('https://kgsearch.googleapis.com/v1/entities:search?query=' + this.searchTerm.value +
        '&key=AIzaSyBNOF-hKaRYwGGg781e9DEDhSv1YACMJWQ&limit=1&indent=True')
      .subscribe((data) => {
        this.data = data;
      console.log(data);
    });

 }
}


