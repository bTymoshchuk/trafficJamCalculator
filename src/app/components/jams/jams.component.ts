import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource ,
         MatPaginator,
         MatSort} from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Jam} from '../../jam';
import {MatDialog, MatDialogRef} from '@angular/material';
import { AddjamComponent } from 'src/app/components/addjam/addjam.component';
import {GlobalService} from '../../global.service';
import {EditJamComponent} from '../edit-jam/edit-jam.component';


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
  public JAMS_DATA: Jam[] = this.globalService.JAMS;                                      // array of jams
  public selectedJam: Jam | null;                                        //
  public jamSelected = false;
  public displayedColumns: string[] = ['begin', 'reason',  'duration'];
  public dataSource  = new MatTableDataSource<Jam>(this.JAMS_DATA);

  constructor(
      private addjam: MatDialog,
      private globalService: GlobalService,
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public onSelect(jam: Jam): void { // selects a jam in the table
    if (this.selectedJam === jam) {
      this.selectedJam = null;
      this.jamSelected = false;
    } else {
      this.selectedJam = jam;
      this.jamSelected = true;
    }
  }

  public newJam() {          // new jam window

      const dialogRef = this.addjam.open(AddjamComponent, {
        width: '250px'
      });
  }

  public editJam(id: number): void {
      this.globalService.newJam.id = id;
      const dialogRef = this.addjam.open(EditJamComponent, {
        width: '250px'
  });
  }

  public removeJam(): void {
    this.globalService.setJams(this.globalService.delete(this.selectedJam.id));
    console.log('-Deleted jam Id:' + this.selectedJam.id);
  }

ngOnInit() {
    this.JAMS_DATA = this.globalService.JAMS;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
