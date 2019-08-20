import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjamComponent } from './addjam.component';
import {
  MatDatepicker,
  MatDatepickerModule,
  MatDialog,
  MatDialogModule,
  MatDialogRef, MatInputModule,
  MatNativeDateModule,
  MatSelectModule
} from '@angular/material';
import {FormsModule, NgModel, NgModelGroup} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {GlobalService} from '../../global.service';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



describe('AddjamComponent', () => {
  let component: AddjamComponent;
  let fixture: ComponentFixture<AddjamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjamComponent ],
      imports: [ MatSelectModule,
        MatDatepickerModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
        MatDialogModule,
        MatNativeDateModule,
        MatInputModule,
        BrowserAnimationsModule],
      providers: [GlobalService, {provide: MatDialogRef, useValue: {}}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
