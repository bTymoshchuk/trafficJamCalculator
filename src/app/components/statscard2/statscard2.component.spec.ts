import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Statscard2Component } from './statscard2.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {StatisticsService} from '../../statistics.service';
import {Jam} from '../../jam';

describe('Statscard2Component', () => {
  let component: Statscard2Component;
  let fixture: ComponentFixture<Statscard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Statscard2Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [ { provide: StatisticsService, useClass: MockStatisticsService}]
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

  it('should render average duration', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain(' Average jam duration:  02:00:39  ');
  });

  it('should render most common reasons', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain(' Most common reasons: Obstacles, Road accident ');
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
   public Reasons: string[] = [];
   public Amounts: number[] = [];
   public s = '';

    // Fills Reasons and Amounts arrays for Chart1Component
    public setReasons(): void {
      this.Amounts = [];
      this.Reasons = [];
      for ( let i = 0; i < this.JAMS.length; i++) {
        if (this.Reasons.includes(this.JAMS[i].reason)) {
          ++this.Amounts[this.Reasons.indexOf(this.JAMS[i].reason)];
        } else {
          this.Reasons.push(this.JAMS[i].reason);
          this.Amounts.push(1);
        }
      }
    }

    // Returns the most common reason(s)
    public getMostCommonReasons(): string {
      let maxAmount = 0;
      let mostCommonReason = '';
      for (let i = 0; i < this.Amounts.length; i++) {
        if ( this.Amounts[i] > maxAmount) {
          mostCommonReason = this.Reasons[i];
          maxAmount = this.Amounts[i];
          this.s = '';
        } else {
          if ( this.Amounts[i] === maxAmount) {
            mostCommonReason = mostCommonReason + ', ' + this.Reasons[i];
            this.s = 's';
          }
        }
      }
      return(mostCommonReason);
    }

    // Returns average duration
    public getAverageDuration(): number {
      return this.getTotalDuration() / this.JAMS.length;
    }

    public getTotalDuration(): number {
      let  j = 0;
      for (const jam of this.JAMS) {
        j = j + jam.duration;
      }
      return j;

    }

  }
});
