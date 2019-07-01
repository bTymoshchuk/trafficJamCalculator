import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../global.service';


@Component({
  selector: 'app-day-spinner',
  templateUrl: './day-spinner.component.html',
  styleUrls: ['./day-spinner.component.css']
})
export class DaySpinnerComponent implements OnInit {
  private JAMS_DATA = this.globalService.JAMS;
  public spinnerValue = 0;
  public mode = 'determinate';
  public currentDayTime = 0;

  constructor(
    public globalService: GlobalService,
  ) { }


  public getTotalDuration() {          // returns total duration of all jams in milliseconds
    let  j = 0;
    for (const jam of this.JAMS_DATA) {
        j = j + jam.duration;
    }
    return j;

  }

  public getCurrentDayTime() {         // returns current working day time
  return this.getTotalDuration() % 28000000;
  }

  public getSpinnerValue() {           // returns spinner value(% of current working day spent in jams)
    return this.currentDayTime / 28000000 * 100;
  }

  ngOnInit() {
    this.currentDayTime = this.getCurrentDayTime();
    this.spinnerValue = this.getSpinnerValue();
  }

}
