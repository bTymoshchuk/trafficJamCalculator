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
  public jamCondition  = true;
  public selectedReason = 'Unknown';
  public date = new Date();

  public getJamCondition(): void {   // checks for running jams
      if (this.globalService.lastJam.duration === 0) {
        this.startDate.setTime(this.globalService.lastJam.begin);
        this.selectedReason = this.globalService.lastJam.reason;
        this.timer = new Date();
        this.timer.setTime(this.timer.getTime() - this.startDate.getTime());
        setInterval(() => {         // timer
          this.timer = new Date();
          this.timer.setTime(this.timer.getTime() - this.startDate.getTime());
        }, 1000);
        this.jamCondition = false;
      } else {
        this.jamCondition = true;
      }
  }

  public clock(): void {             // digital clock
    this.date = new Date();
    setInterval(() => {
      this.date = new Date();
  }, 1000);
  }

  public start(): void {              // start button
    if (this.globalService.lastJam.duration !== 0) {
      this.startDate = new Date();
      this.globalService.newJam.id = null;
      this.globalService.newJam.begin = this.startDate.getTime();
      this.globalService.newJam.duration = 0;
      this.globalService.newJam.reason = this.selectedReason;
      this.globalService.setJams(this.globalService.createJam(this.globalService.newJam));
    }
    this.getJamCondition();
  }

  public stop(): void {               // stop button
    this.globalService.newJam = this.globalService.lastJam;
    this.globalService.newJam.duration = this.timer.getTime();
    this.globalService.setJams(this.globalService.updateJam(this.globalService.newJam));
    this.getJamCondition();
    this.openDialog();

  }

  public cancel(): void {            // cancel button
    this.globalService.setJams(this.globalService.delete(this.globalService.lastJam.id));
    this.getJamCondition();
}



  public openDialog() {              // dialog window

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
