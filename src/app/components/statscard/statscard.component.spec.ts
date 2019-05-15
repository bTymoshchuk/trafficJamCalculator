import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatscardComponent } from './statscard.component';

describe('StatscardComponent', () => {
  let component: StatscardComponent;
  let fixture: ComponentFixture<StatscardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatscardComponent ]
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
});
