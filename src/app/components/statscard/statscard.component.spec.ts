import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatscardComponent } from './statscard.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Jam} from '../../jam';
import {GlobalService} from '../../global.service';

describe('StatscardComponent', () => {
  let component: StatscardComponent;
  let fixture: ComponentFixture<StatscardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatscardComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA],
      providers: [ {provide: GlobalService, useClass: MockGlobalService}]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatscardComponent);
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
