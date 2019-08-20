import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JamsComponent } from './jams.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {GlobalService} from '../../global.service';
import {Jam} from '../../jam';
import {MatDialogModule, MatPaginatorModule, MatTableDataSource, MatTableModule} from '@angular/material';

describe('JamsComponent', () => {
  let component: JamsComponent;
  let fixture: ComponentFixture<JamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [ {provide: GlobalService, useClass: MockGlobalService}],
      imports: [MatTableModule, MatPaginatorModule, MatDialogModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  class MockGlobalService{
    public JAMS: Jam[] = [];
  }
});
