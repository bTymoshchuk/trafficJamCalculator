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
  public JAMS_DATA: Jam[] = this.globalService.JAMS; // Array of jams
  public selectedJam: Jam | null; // Selected jam in the list
  public jamSelected = false; // Is true if there is a selected jam
  public displayedColumns: string[] = ['begin', 'reason',  'duration'];
  public dataSource  = new MatTableDataSource<Jam>(this.JAMS_DATA);

  constructor(
    private addjam: MatDialog,
    public globalService: GlobalService,
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // Selecting a jam in the table
  public onSelect(jam: Jam): void {
    // If a jam is already selected
    if (this.selectedJam === jam) {
      // Unselect the jam
      this.selectedJam = null;
      this.jamSelected = false;
    } else {
      // Else select the jam
      this.selectedJam = jam;
      this.jamSelected = true;
    }
  }

  // New jam window
  public newJam() {

      const dialogRef = this.addjam.open(AddjamComponent, {
        width: '250px'
      });
  }

  // Edit jam window
  public editJam(id: number): void {
      this.globalService.newJam.id = id;
      const dialogRef = this.addjam.open(EditJamComponent, {
        width: '250px'
  });
  }

  // Delete button
  public removeJam(): void {
    this.globalService.setJams(this.globalService.delete(this.selectedJam.id));
  }

ngOnInit() {
    this.JAMS_DATA = this.globalService.JAMS;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
