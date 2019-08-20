/* tslint:disable:prefer-const */
import {async, TestBed} from '@angular/core/testing';

import { StatisticsService } from './statistics.service';
import {GlobalService} from './global.service';
import {Jam} from './jam';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Router} from '@angular/router';

describe('StatisticsService', () => {
  let statistics: StatisticsService;
  let amountsMock: number[];
  let reasonsMock: string[];
  let mockJams: Jam[];

  beforeEach(async(() => TestBed.configureTestingModule({
    providers: [GlobalService, StatisticsService],

  })));

  beforeEach(() => {
     mockJams = [{id: 1, reason: 'Obstacles', begin: 1550473513000, duration: 5351822},
      {id: 2, reason: 'Road accident', begin: 1550559757000, duration: 4906187 },
      {id: 3, reason: 'Traffic overload', begin: 1550646386000, duration: 3501824 },
      {id: 4, reason: 'Weather', begin:  82800000, duration: 3860559 },
      {id: 5, reason: 'Unknown', begin:  82800000, duration: 515875 },
      {id: 6, reason: 'Road accident', begin:  82800000, duration: 2827687 },
      {id: 7, reason: 'Obstacles', begin:  82800000, duration: 909499 + 28800000 }];
     statistics = TestBed.get(StatisticsService);
     amountsMock = [3, 1, 2];
     reasonsMock = ['a', 'c', 'b'];
     statistics.globalService.JAMS = mockJams;
     statistics.Amounts = amountsMock;
     statistics.Reasons = reasonsMock;
  });



  it('should be created', () => {
    const service: StatisticsService = TestBed.get(StatisticsService);
    expect(service).toBeTruthy();
  });

  it('should sort',  () => {
    statistics.decreasingBubbleSort(amountsMock, reasonsMock);
    expect(amountsMock).toBe([3, 2, 1]);
    expect(reasonsMock).toBe(['a', 'b', 'c']);
  });

  it('should set amounts and reasons', () => {
    statistics.setReasons();
    expect(statistics.Amounts).toBe([2, 2, 1, 1, 1]);
    expect(statistics.Reasons).toBe(['Obstacles', 'Road accident', 'Traffic overload', 'Weather', 'Unknown' ]);
  });

  it('should return total duration', () => {
    expect(statistics.getTotalDuration).toBe(50673453);
  });

  it('should return current working day time', () => {
    expect(statistics.getCurrentDayTime()).toBe(21873453);
  });

  it('should return spinner value ', () => {
    expect(statistics.getSpinnerValue() - 75.94948).toBeLessThan(0.0001);
  });

  it('should return full working days', () => {
    expect(statistics.getWorkingDays).toBe(1);
  });

  it('should return average jam duration', () => {
    expect(statistics.getAverageDuration).toBeCloseTo(7239065, 10);
  });

  it('should return most common reason(s)', () => {
    const service = TestBed.get(StatisticsService);
    expect(service.getMostCommonReasons).toBe('a', '' + service.getMostCommonReasons);
  });
});


