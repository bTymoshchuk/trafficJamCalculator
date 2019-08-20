import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsComponent } from './statistics.component';
import {Component} from '@angular/core';
import {GlobalService} from '../../global.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StatisticsComponent,
        MockChartsCardComponent,
        MockJamsComponent,
        MockSpinnerComponent,
        MockStatscard2Component,
        MockStatscardComponent ],
      providers: [ {provide: MatDialogRef, useValue: {}}, GlobalService],
      imports: [ HttpClientModule, RouterTestingModule, MatDialogModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  @Component({
    selector: 'app-jams',
    template: ''
  })
  class MockJamsComponent {
  }

  @Component({
    selector: 'app-day-spinner',
    template: ''
  })
  class MockSpinnerComponent {
  }
  @Component({
    selector: 'app-statscard',
    template: ''
  })
  class MockStatscardComponent {
  }
  @Component({
    selector: 'app-statscard2',
    template: ''
  })
  class MockStatscard2Component {
  }
  @Component({
    selector: 'app-charts-card',
    template: ''
  })
  class MockChartsCardComponent {
  }
});
