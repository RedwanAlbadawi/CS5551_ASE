import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';

import { HomePage } from "./home";
import {HttpClientModule} from "@angular/common/http";

describe('ContactPage Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [HttpClientModule,
        IonicModule.forRoot(HomePage)
      ],
      providers: [ ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof HomePage).toBe(true);
  });



});
