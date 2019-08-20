import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsCardComponent } from './charts-card.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('ChartsCardComponent', () => {
  let component: ChartsCardComponent;
  let fixture: ComponentFixture<ChartsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsCardComponent ],
      schemas: [ NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
