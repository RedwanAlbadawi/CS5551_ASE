import { Component } from '@angular/core';
import { ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { AngularFireDatabase } from  'angularfire2/database'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  @ViewChild('searchTerm') searchTerm;
  data: any;
  data1: any;
  searches: any[];

  constructor(private speech: SpeechRecognition, public http: HttpClient, public db:AngularFireDatabase) {}


  searchTerms() {

    console.log(this.searchTerm.value);
    this.http.get('https://kgsearch.googleapis.com/v1/entities:search?query=' + this.searchTerm.value +
            '&key=AIzaSyBNOF-hKaRYwGGg781e9DEDhSv1YACMJWQ&limit=1&indent=True')
          .subscribe((data) => {
            this.data = data;
          console.log(data);
        });


    this.http.jsonp('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyBD9PHtfL3lttjadyonL2t4NsRg0L6qPMo', 'callback')
      .subscribe(data1 => {
        this.data1 = data1;
        console.log("ase");
        console.log(data1);
      });

    this.db.list('/search').push(this.searchTerm.value);
  }

  async isSpeechSupported():Promise<boolean> {
    const isAvail = await this.speech.isRecognitionAvailable();
    console.log(isAvail);
    return isAvail;
  }

  lastSearch() {
    console.log(this.db.list('/search'));
  }
}
