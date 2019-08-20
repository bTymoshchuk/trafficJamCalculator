import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJamComponent } from './edit-jam.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatDatepickerModule, MatDialogRef, MatInputModule, MatNativeDateModule, MatSelectModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {GlobalService} from '../../global.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('EditJamComponent', () => {
  let component: EditJamComponent;
  let fixture: ComponentFixture<EditJamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditJamComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [MatDatepickerModule, MatFormFieldModule, FormsModule, MatNativeDateModule, MatInputModule, MatSelectModule, BrowserAnimationsModule],
      providers: [{provide: GlobalService, useValue: {}},{provide: MatDialogRef, useValue: {}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
