import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSortModule} from '@angular/material/sort';
import { MatTableDataSource ,
         MatPaginator,
         MatSort
                     } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';
import { Jam } from 'C:/Users/Borys.Tymoshchuk/Projects/trafficJamCalculator/trafficJam/src/app/jam';
import { JAMS } from 'C:/Users/Borys.Tymoshchuk/Projects/trafficJamCalculator/trafficJam/src/app/jams-list';






@Component({
  selector: 'app-jams',
  templateUrl: './jams.component.html',
  styleUrls: ['./jams.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class JamsComponent implements OnInit {
  JAMS_DATA = JAMS;
  value = 0;
  selectedJam: Jam | null;
  mode = 'determinate';
  jamSelected = false;
  displayedColumns: string[] = ['begin','reason',  'duration'];
  dataSource  = new MatTableDataSource<Jam>(this.JAMS_DATA);
  currentDayTime = 0;
  workingDays = 0;
  averageDuration = 0;


  constructor( ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
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

  getSpinnerValue(){                   //returns % of current working day spent in jams
    return this.currentDayTime/28000000*100;
  }

  toggleMode(){
    if (this.mode == 'indeterminate') {
        this.mode = 'determinate';
    } else{
      this.mode = 'indeterminate';
    }
  }

  getWorkingDays(){           //returns amount of working days spent in jams
    return (this.getTotalDuration()/28800000>>0);
  }



  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.currentDayTime = this.getCurrentDayTime();
    this.workingDays = this.getWorkingDays();
    this.averageDuration = this.getAverageDuration();
    setInterval(()=>{

      this.currentDayTime = this.getCurrentDayTime();
      this.value = this.getSpinnerValue();
      }
      ,1000);

  }
  onSelect(jam: Jam): void {
    if(this.selectedJam === jam){
      this.selectedJam = null;
      this.jamSelected = false;
    }
    else{
      this.selectedJam = jam;
      this.jamSelected = true;
    }
   }
}
