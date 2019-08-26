import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatscardComponent } from './statscard.component';
import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {StatisticsService} from '../../statistics.service';



describe('StatscardComponent', () => {
  let component: StatscardComponent;
  let fixture: ComponentFixture<StatscardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatscardComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA],
      providers: [{provide: StatisticsService, useClass: MockStatisticsService}],

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

  it('should render an amount of days spent in traffic jams', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(1);
  });


  class MockStatisticsService {
    public getWorkingDays(): number {
      return 1;
    }
  }
  @Component({
    selector: 'app-empty',
    template: ''
  })
  class EmptyComponent {
  }

});

