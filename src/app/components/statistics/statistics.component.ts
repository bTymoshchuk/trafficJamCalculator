import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../global.service';
import {AddjamComponent} from '../addjam/addjam.component';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  public existingJams = false;

  constructor(public globalService: GlobalService,
              public addjam: MatDialog) { }

  public checkForJams(): void {
    if (this.globalService.JAMS.length === 0) {
      this.existingJams =   false;
    } else {
      this.existingJams =    true;
    }
  }

  public newJam() {          // new jam window

    const dialogRef = this.addjam.open(AddjamComponent, {
      width: '250px'
    });
  }

  ngOnInit() {
   this.checkForJams();
  }

}
