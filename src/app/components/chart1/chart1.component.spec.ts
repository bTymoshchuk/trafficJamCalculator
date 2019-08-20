import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chart1Component } from './chart1.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {GlobalService} from '../../global.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule, MatDialogRef} from '@angular/material';
import {Jam} from '../../jam';

describe('Chart1Component', () => {
  let component: Chart1Component;
  let fixture: ComponentFixture<Chart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chart1Component ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: GlobalService, useClass: MockGlobalService}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chart1Component);
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
