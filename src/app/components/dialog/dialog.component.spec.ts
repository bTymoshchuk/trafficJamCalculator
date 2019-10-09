import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import {MatDialogRef} from '@angular/material';
import {GlobalService} from '../../global.service';
import {Jam} from '../../jam';
import {FacebookService} from 'ngx-facebook';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogComponent ],
      providers: [ {provide: MatDialogRef, useValue: {}},{provide: GlobalService, useClass: MockGlobalService}, FacebookService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the duration of the last jam', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain('0');
  });

  class MockGlobalService {
    public newJam: Jam = {id: 0, reason: 'Unknown', begin: 0, duration: 0};
  }
});
