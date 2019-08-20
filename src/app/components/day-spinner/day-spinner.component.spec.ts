import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaySpinnerComponent } from './day-spinner.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {GlobalService} from '../../global.service';
import {Jam} from '../../jam';

describe('DaySpinnerComponent', () => {
  let component: DaySpinnerComponent;
  let fixture: ComponentFixture<DaySpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaySpinnerComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{provide: GlobalService, useClass: MockGlobalService}]
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

  class MockGlobalService {
    public JAMS: Jam[] = [];
  }
});
