import { Component, OnInit } from '@angular/core';
import { Jam } from 'C:/Users/Borys.Tymoshchuk/Projects/trafficJamCalculator/trafficJam/src/app/jam';
import {GlobalService} from '../../global.service';


@Component({
  selector: 'app-statscard',
  templateUrl: './statscard.component.html',
  styleUrls: ['./statscard.component.css']
})
export class StatscardComponent implements OnInit {
  public JAMS_DATA = this.globalService.JAMS;
  public workingDays = 0;

  public getTotalDuration() {          // returns total duration of all jams in milliseconds
    let j = 0;
    for (let i = 0; i < this.JAMS_DATA.length; i++) {
        j = j + this.JAMS_DATA[i].duration;
    }
    return j;

  }

  public getWorkingDays() {           // returns an amount of working days spent in jams
    return ( this.getTotalDuration() / 28800000 >> 0);
  }

  constructor(
    public globalService: GlobalService,
  ) { }

  ngOnInit() {
        this.workingDays = this.getWorkingDays();
  }

}
