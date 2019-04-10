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


export interface Jams {
  id: number;
  reason: string;
  begin: number;
  duration: number;
}

var JAMS_DATA: Jams[] = [
  {id: 1, reason:'car accident', begin: 1550473513000, duration: 5351822},
  {id: 2, reason:'bad weather', begin: 1550559757000, duration: 4906187+ 1200000 },
  {id: 3, reason:'traffic', begin: 1550646386000, duration: 3501824 + 1200000},
  {id: 4, reason:'snow', begin:  82800000, duration: 3860559+ 1200000 },
  {id: 5, reason:'unknown', begin:  82800000, duration: 515875 +1200000 },
  {id: 6, reason:'car accident', begin:  82800000, duration: 2827687+ 1200000 },
  {id: 7, reason:'car accident', begin:  82800000, duration: 909499 + 1200000},
  {id: 8, reason:'car accident', begin:  82800000, duration: 5316323+ 1200000 },
  {id: 9, reason:'car accident', begin:  82800000, duration: 2335425 + 1200000},
  {id: 10, reason:'car accident', begin:  82800000, duration:5062742+ 1200000},
]


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
  value = 0;
  selectedJam: Jams | null;
  mode = 'determinate';
  jamSelected = false;
  displayedColumns: string[] = ['begin','reason',  'duration']; //'id',
  dataSource  = new MatTableDataSource<Jams>(JAMS_DATA);
  currentDayTime = 0;


  constructor( ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  getCurrentDayTime(){          //returns current working day time
    var j = 0;
    for (let i = 0; i < JAMS_DATA.length; i++) {
        j = j + JAMS_DATA[i].duration;
    }
    return j%28000000;
  }

  getValue(){                   //returns current working day time in %
    return this.currentDayTime/28000000*100;
  }

  toggleMode(){
    if (this.mode == 'indeterminate') {
        this.mode = 'determinate';
    } else{
      this.mode = 'indeterminate';
    }
  }

  progressSpinnerAnimation(){
      this.mode = 'indeterminate';
      setTimeout(()=> this.toggleMode(), 1200);
    }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    setInterval(()=>{
      this.currentDayTime = this.getCurrentDayTime();
      this.value = this.getValue();
      }
      ,1000);
    this.progressSpinnerAnimation();
  }
  onSelect(jam: Jams): void {
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
