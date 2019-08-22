import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatscardComponent } from './statscard.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Jam} from '../../jam';
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
    public JAMS: Jam[] =
      [{id: 1, reason: 'Obstacles', begin: 1550473513000, duration: 5351822},
      {id: 2, reason: 'Road accident', begin: 1550559757000, duration: 4906187 },
      {id: 3, reason: 'Traffic overload', begin: 1550646386000, duration: 3501824 },
      {id: 4, reason: 'Weather', begin:  82800000, duration: 3860559 },
      {id: 5, reason: 'Unknown', begin:  82800000, duration: 515875 },
      {id: 6, reason: 'Road accident', begin:  82800000, duration: 2827687 },
      {id: 7, reason: 'Obstacles', begin:  82800000, duration: 909499 + 28800000 }];


    public getTotalDuration(): number {
      let j = 0;
      for (const jam of this.JAMS) {
        j = j + jam.duration;
      }
      return j;
    }

      // Returns an amount of working days spent in jams
    public getWorkingDays(): number {
        return Math.floor( this.getTotalDuration() / 28800000);

    }
  }
});
