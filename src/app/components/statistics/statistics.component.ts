import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../global.service';
import {AddjamComponent} from '../addjam/addjam.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  public existingJams = false;

  constructor(public globalService: GlobalService,
              public addjam: MatDialog) { }

  // Checks for existing jams
  public checkForJams(): void {
    if (this.globalService.JAMS.length === 0) {
      this.existingJams =   false;
    } else {
      this.existingJams =    true;
    }
  }

  // New jam window
  public newJam() {

    const dialogRef = this.addjam.open(AddjamComponent, {
      width: '250px'
    });
  }

  ngOnInit() {
   this.checkForJams();
  }

}
