import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chart2Component } from './chart2.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {GlobalService} from '../../global.service';
import {MatDialogModule, MatDialogRef} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {Jam} from '../../jam';

describe('Chart2Component', () => {
  let component: Chart2Component;
  let fixture: ComponentFixture<Chart2Component>;
  const mockJams = [{id: 1, reason: 'Obstacles', begin: 1550473513000, duration: 5351822},
    {id: 2, reason: 'Road accident', begin: 1550559757000, duration: 4906187 },
    {id: 3, reason: 'Traffic overload', begin: 1550646386000, duration: 3501824 },
    {id: 4, reason: 'Weather', begin:  82800000, duration: 3860559 },
    {id: 5, reason: 'Unknown', begin:  82800000, duration: 515875 },
    {id: 6, reason: 'Road accident', begin:  82800000, duration: 2827687 },
    {id: 7, reason: 'Obstacles', begin:  82800000, duration: 909499 + 28800000 }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chart2Component ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: GlobalService, useClass: MockGlobalService}]
    })
    .compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(Chart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.globalService.JAMS  = mockJams;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return days', () => {
    component.getDays();
    expect(component.amounts).toBe([ 1, 1, 1, 0, 4, 0, 0]);
  });

  class MockGlobalService {
    public JAMS: Jam[] = [];
  }
});
