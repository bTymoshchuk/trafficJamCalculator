import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { GlobalService } from 'src/app/global.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public startDate = new Date();
  public timer = new Date();
  // jamCondition is false when there is a running jam
  public jamCondition  = true;
  public selectedReason = 'Unknown';
  public date = new Date();

  // Checks for running jams
  public getJamCondition(): void {
      // Only the last jam can be running
      // Jam is running when jam.duration === 0
      // If the lastJam is running
      if (this.globalService.lastJam.duration === 0) {
        // Sets last Jam's start time
        this.startDate.setTime(this.globalService.lastJam.begin);
        // And reason
        this.selectedReason = this.globalService.lastJam.reason;
        // Starts the timer
        this.timer = new Date();
        this.timer.setTime(this.timer.getTime() - this.startDate.getTime());
        setInterval(() => {         // timer
          this.timer = new Date();
          this.timer.setTime(this.timer.getTime() - this.startDate.getTime());
        }, 1000);
        // Sets jamCondition to false
        this.jamCondition = false;
      } else {
        // Else sets jamCondition to true
        this.jamCondition = true;
      }
  }

  // Digital clock
  public clock(): void {
    this.date = new Date();
    setInterval(() => {
      this.date = new Date();
  }, 1000);
  }

  // Start button
  public start(): void {
    if (this.globalService.lastJam.duration !== 0) {
      this.startDate = new Date();
      // Sets globalService.newJam's parameters
      this.globalService.newJam.id = null;
      this.globalService.newJam.begin = this.startDate.getTime();
      this.globalService.newJam.duration = 0;
      this.globalService.newJam.reason = this.selectedReason;
      // Creates a new jam and gets a new JAMS array on GlobalService
      this.globalService.setJams(this.globalService.createJam(this.globalService.newJam));
    }
    this.getJamCondition();
  }

  // Stop button
  public stop(): void {
    // Sets newJam to the lastJam
    this.globalService.newJam = this.globalService.lastJam;
    // Sets new duration
    this.globalService.newJam.duration = this.timer.getTime();
    // Updates the jam and gets a new JAMS array on GlobalService
    this.globalService.setJams(this.globalService.updateJam(this.globalService.newJam));
    this.getJamCondition();
    // Opens DialogComponent
    this.openDialog();

  }

  // Cancel button
  public cancel(): void {
    // Deletes the last running jam
    this.globalService.setJams(this.globalService.delete(this.globalService.lastJam.id));
    this.getJamCondition();
}


  // Dialog window
  public openDialog() {

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px'
    });
}

  constructor(
    private globalService: GlobalService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getJamCondition();
    this.clock();

  }
}
