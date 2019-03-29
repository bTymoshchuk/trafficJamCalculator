import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSortModule} from '@angular/material/sort';
import { MatTableDataSource ,
         MatPaginator,
         MatSort
                     } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



export interface Jams {
  id: number;
  reason: string;
  begin: number;
  duration: number;
}

const ELEMENT_DATA: Jams[] = [
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
  styleUrls: ['./jams.component.css']
})
export class JamsComponent implements OnInit {
  value = 0;
  selectedJam: Jams;
  mode = 'determinate';

  displayedColumns: string[] = ['id', 'begin','reason',  'duration'];
  dataSource  = new MatTableDataSource<Jams>(ELEMENT_DATA);


  constructor( ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  getValue(){                   //returns time till the next FB post
    var j = 0;
    for (let i = 0; i < ELEMENT_DATA.length; i++) {
        j = j + ELEMENT_DATA[i].duration;
    }
        j = j%28800000;
        return j/28000000*100;
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
      setInterval(this.toggleMode, 1000);
    }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.value= this.getValue();
   this.progressSpinnerAnimation();
  }
  onSelect(jam: Jams): void {
     this.selectedJam = jam;
   }
}
