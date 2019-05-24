import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjamComponent } from './addjam.component';

describe('AddjamComponent', () => {
  let component: AddjamComponent;
  let fixture: ComponentFixture<AddjamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjamComponent ]
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
