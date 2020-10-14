import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekviewComponent } from './weekview.component';

describe('WeekviewComponent', () => {
  let component: WeekviewComponent;
  let fixture: ComponentFixture<WeekviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
