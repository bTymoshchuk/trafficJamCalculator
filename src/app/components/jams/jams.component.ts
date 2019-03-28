import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSortModule} from '@angular/material/sort';
import { MatTableDataSource ,
         MatPaginator,
         MatSort
                     } from '@angular/material';
import {MatTableModule} from '@angular/material/table';

export interface Jams {
  id: number;
  reason: string;
  begin: number;
  duration: number;
}

const ELEMENT_DATA: Jams[] = [
  {id: 1, reason:'car accident', begin: 1550473513000, duration: 5351822},
  {id: 2, reason:'bad weather', begin: 1550559757000, duration: 4906187 },
  {id: 3, reason:'traffic', begin: 1550646386000, duration: 3501824 },
  {id: 4, reason:'snow', begin:  82800000, duration: 3860559 },
  {id: 5, reason:'unknown', begin:  82800000, duration: 515875 },
  {id: 6, reason:'car accident', begin:  82800000, duration: 2827687 },
  {id: 7, reason:'car accident', begin:  82800000, duration: 909499 },
  {id: 8, reason:'car accident', begin:  82800000, duration: 5316323 },
  {id: 9, reason:'car accident', begin:  82800000, duration: 2335425 },
  {id: 10, reason:'car accident', begin:  82800000, duration:5062742},
]


@Component({
  selector: 'app-jams',
  templateUrl: './jams.component.html',
  styleUrls: ['./jams.component.css']
})
export class JamsComponent implements OnInit {
  selectedJam: Jams;

  displayedColumns: string[] = ['id', 'begin','reason',  'duration'];
  dataSource  = new MatTableDataSource<Jams>(ELEMENT_DATA);


  constructor( ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  onSelect(jam: Jams): void {
     this.selectedJam = jam;
   }
}
