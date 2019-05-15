import { Component, OnInit } from '@angular/core';
import { Jam } from 'C:/Users/Borys.Tymoshchuk/Projects/trafficJamCalculator/trafficJam/src/app/jam';
import { JAMS } from 'C:/Users/Borys.Tymoshchuk/Projects/trafficJamCalculator/trafficJam/src/app/jams-list';

@Component({
  selector: 'app-statscard',
  templateUrl: './statscard.component.html',
  styleUrls: ['./statscard.component.css']
})
export class StatscardComponent implements OnInit {
  JAMS_DATA = JAMS;
  currentDayTime = 0;
  workingDays = 0;
  averageDuration = 0;
getTotalDuration(){          //returns total duration of all jams in milliseconds
    var j = 0;
    for (let i = 0; i < this.JAMS_DATA.length; i++) {
        j = j + this.JAMS_DATA[i].duration;
    }
    return j;

  }
  getAverageDuration(){        //returns average duration
    return this.getTotalDuration()/this.JAMS_DATA.length;
  }

  getCurrentDayTime(){          //returns current working day time
  return this.getTotalDuration()%28000000;
  }

  getWorkingDays(){           //returns an amount of working days spent in jams
    return (this.getTotalDuration()/28800000>>0);
  }

  constructor() { }

  ngOnInit() {
        this.workingDays = this.getWorkingDays();
  }

}
