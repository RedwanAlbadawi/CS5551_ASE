import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';

import { ContactPage } from "./contact";
import {HttpClientModule} from "@angular/common/http";

describe('ContactPage Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactPage],
      imports: [HttpClientModule,
        IonicModule.forRoot(ContactPage)
      ],
      providers: [ ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPage);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof ContactPage).toBe(true);
  });



});
