import { Injectable } from '@angular/core';
import {GlobalService} from './global.service';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  Reasons: string[] = [];
  Amounts: number[] = [];
  s = '';
  currentDayTime: number;
  // Used to sort Amounts[] and Reasons[] arrays for using in Chart1Component
  public decreasingBubbleSort( a: number[] , b: string[] ): void {
    let n: number;
    let s: string;
    for (let i = 0; i < a.length -  1; i++) {
      for (let j = 0; j < a.length - i - 1; j++) {
        if (a[j] < a[j + 1]) {
          n = a[j];
          a[j] = a[j + 1];
          a[j + 1] = n;
          s = b[j];
          b[j] = b[j + 1];
          b[j + 1] = s;
        }
      }
    }
  }

  // Fills Reasons and Amounts arrays for Chart1Component
  public setReasons(): void {
    this.Amounts = [];
    this.Reasons = [];
    for ( let i = 0; i < this.globalService.JAMS.length; i++) {
      if (this.Reasons.includes(this.globalService.JAMS[i].reason)) {
        ++this.Amounts[this.Reasons.indexOf(this.globalService.JAMS[i].reason)];
      } else {
        this.Reasons.push(this.globalService.JAMS[i].reason);
        this.Amounts.push(1);
      }
    }
  }

  // Returns total duration of all jams in milliseconds
  public getTotalDuration(): number {
    let  j = 0;
    for (const jam of this.globalService.JAMS) {
      j = j + jam.duration;
    }
    return j;

  }

  // Returns current working day time
  public getCurrentDayTime(): number {
    this.currentDayTime = this.getTotalDuration() % 28000000;
    return this.currentDayTime;
  }

  // Returns spinner value(% of current working day spent in jams)
  public getSpinnerValue(): number {
    return ( this.getCurrentDayTime() / 28000000 * 100);
  }

  // Returns an amount of working days spent in jams
  public getWorkingDays(): number {
    return ( this.getTotalDuration() / 28800000 >> 0);
  }

  // Returns average duration
  public getAverageDuration(): number {
    return this.getTotalDuration() / this.globalService.JAMS.length;
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


  constructor(
    public globalService: GlobalService,
  ) { }
}
