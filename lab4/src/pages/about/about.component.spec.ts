import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';

import {AboutPage} from "./about";

describe('AboutPage Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPage],
      imports: [
        IonicModule.forRoot(AboutPage)
      ],
      providers: [ ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPage);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof AboutPage).toBe(true);
  });



});
