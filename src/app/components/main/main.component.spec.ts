import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {GlobalService} from '../../global.service';
import {MatDialogModule, MatDialogRef} from '@angular/material';
import {Jam} from '../../jam';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [ {provide: GlobalService, useClass: MockGlobalService}, {provide: MatDialogRef, useValue:{}}],
      imports: [ MatDialogModule, ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get condition of the last jam when over', () => {
    component.getJamCondition();
    expect(component.jamCondition).toBeTruthy();
  });

  it('should get condition of the last jam when running', () => {
    component.globalService.lastJam.duration = 0;
    component.getJamCondition();
    expect(component.jamCondition).toBeFalsy();
  });

  class MockGlobalService {
    public JAMS: Jam[] = [];
    public lastJam: Jam = {id: 1, reason: 'Unknown', begin: 0, duration: 123456};
  }
});
