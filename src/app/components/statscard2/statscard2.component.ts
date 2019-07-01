import { Component, OnInit } from '@angular/core';
import { ReasonsService} from '../../reasons.service';
import {GlobalService} from '../../global.service';

@Component({
  selector: 'app-statscard2',
  templateUrl: './statscard2.component.html',
  styleUrls: ['./statscard2.component.css']
})
export class Statscard2Component implements OnInit {
  s = '';
  Reasons = [];
  Amounts = [];
  averageDuration = 0;
  mostCommonReason = '';
  getTotalDuration() {          // returns total duration of all jams in milliseconds
    let j = 0;
    for (const jam of  this.globalService.JAMS) {
        j = j + jam.duration;
    }
    return j;

  }
  getAverageDuration() {        // returns average duration
    return this.getTotalDuration() / this.globalService.JAMS.length;
  }

  getMostCommonReasons() {      // returns the name(s) of the most common reason(s)
    let maxAmount = 0;
    let mostCommonReason = '';
    for (let i = 0; i < this.Amounts.length - 1; i++) {
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
    private reasonsService: ReasonsService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
        this.reasonsService.init();
        this.averageDuration = this.getAverageDuration();
        this.Reasons = this.reasonsService.getReasons();
        this.Amounts = this.reasonsService.getAmounts();
        this.mostCommonReason = this.getMostCommonReasons();

  }

}
