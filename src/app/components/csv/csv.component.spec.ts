import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvComponent } from './csv.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {GlobalService} from '../../global.service';
import {Jam} from '../../jam';

describe('CsvComponent', () => {
  let component: CsvComponent;
  let fixture: ComponentFixture<CsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{provide: GlobalService, useClass: MockGlobalService}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvComponent);
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
