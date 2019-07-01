// returns decreasing sorted arrays containing reasons and amounts of reasons of traffic jams

import { Injectable } from '@angular/core';
import {GlobalService} from './global.service';

@Injectable({
  providedIn: 'root'
})
export class ReasonsService {
  Reasons: string[] = [];
  Amounts: number[] = [];

  decreasingBubbleSort( a: number[] , b: string[] ) {
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

  init(): void {
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
  getReasons() {
    return this.Reasons;
  }

  getAmounts() {
    return this.Amounts;
  }

  constructor(
    public globalService: GlobalService,
  ) { }
}
