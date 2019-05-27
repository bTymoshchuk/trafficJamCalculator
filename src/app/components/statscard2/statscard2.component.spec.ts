import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Statscard2Component } from './statscard2.component';

describe('Statscard2Component', () => {
  let component: Statscard2Component;
  let fixture: ComponentFixture<Statscard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Statscard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Statscard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
