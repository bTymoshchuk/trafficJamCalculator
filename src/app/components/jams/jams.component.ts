import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSortModule} from '@angular/material/sort';
import { MatTableDataSource ,
         MatPaginator,
         MatSort} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';
import { Jam } from 'C:/Users/Borys.Tymoshchuk/Projects/trafficJamCalculator/trafficJam/src/app/jam';
import { JAMS } from 'C:/Users/Borys.Tymoshchuk/Projects/trafficJamCalculator/trafficJam/src/app/jams-list';
import {MatDialog, MatDialogRef} from "@angular/material";
import { AddjamComponent } from 'src/app/components/addjam/addjam.component';







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
  JAMS_DATA = JAMS;                                               //array of jams
  selectedJam: Jam | null;                                        //
  jamSelected = false;
  displayedColumns: string[] = ['begin','reason',  'duration'];
  dataSource  = new MatTableDataSource<Jam>(this.JAMS_DATA);

  constructor(
      private addjam: MatDialog,
  ) { }

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

  getWorkingDays(){           //returns an amount of working days spent in jams
    return (this.getTotalDuration()/28800000>>0);
  }


  onSelect(jam: Jam): void { //selects a jam in the table
    if(this.selectedJam === jam){
      this.selectedJam = null;
      this.jamSelected = false;
    }
    else{
      this.selectedJam = jam;
      this.jamSelected = true;
    }
  }

  openAddjamWindow() {          //dialog

      const dialogRef = this.addjam.open(AddjamComponent, {
        width: '250px'
      });
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
