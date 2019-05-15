import { Component, OnInit } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Jam } from 'C:/Users/Borys.Tymoshchuk/Projects/trafficJamCalculator/trafficJam/src/app/jam';
import { JAMS } from 'C:/Users/Borys.Tymoshchuk/Projects/trafficJamCalculator/trafficJam/src/app/jams-list';

@Component({
  selector: 'app-day-spinner',
  templateUrl: './day-spinner.component.html',
  styleUrls: ['./day-spinner.component.css']
})
export class DaySpinnerComponent implements OnInit {
  JAMS_DATA = JAMS;
  value = 0;
  mode = 'determinate';
  currentDayTime = 0;

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

  getSpinnerValue(){             //returns % of current working day spent in jams
    return this.currentDayTime/28000000*100;
  }

  toggleMode(){                 //toggles spinner mode
    if (this.mode == 'indeterminate') {
        this.mode = 'determinate';
    } else{
      this.mode = 'indeterminate';
    }
  }

  constructor() { }

  ngOnInit() {
    this.currentDayTime = this.getCurrentDayTime();
    setInterval(()=>{

      this.currentDayTime = this.getCurrentDayTime();
      this.value = this.getSpinnerValue();
      }
      ,1000);
  }

}
