import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaySpinnerComponent } from './day-spinner.component';

describe('DaySpinnerComponent', () => {
  let component: DaySpinnerComponent;
  let fixture: ComponentFixture<DaySpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaySpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaySpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
