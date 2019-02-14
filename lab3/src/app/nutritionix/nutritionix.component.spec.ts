import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionixComponent } from './nutritionix.component';

describe('NutritionixComponent', () => {
  let component: NutritionixComponent;
  let fixture: ComponentFixture<NutritionixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
