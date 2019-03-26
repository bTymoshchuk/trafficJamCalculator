import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JamsComponent } from './jams.component';

describe('JamsComponent', () => {
  let component: JamsComponent;
  let fixture: ComponentFixture<JamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamsComponent ]
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
});
