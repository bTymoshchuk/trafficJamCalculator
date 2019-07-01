import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJamComponent } from './edit-jam.component';

describe('EditJamComponent', () => {
  let component: EditJamComponent;
  let fixture: ComponentFixture<EditJamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditJamComponent ]
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
