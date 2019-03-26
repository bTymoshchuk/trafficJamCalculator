import { Component, OnInit } from '@angular/core';
import{Jam} from 'C:/Users/Borys.Tymoshchuk/Projects/trafficJamCalculator/trafficJam/src/app/jam';
import {MatSelectModule} from '@angular/material/select';
import {MatDialog, MatDialogRef} from "@angular/material";
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  myDate = new Date();
  startDate = new Date();
  date1 = 0;
  hh= 0;
  mm = 0;
  ss = 0;
  //date2 = 0;
  timer = new Date();
  lastJamDuration = new Date();
  jamCondition  = true;



  ngOnInit() {
    this.utcTime();
  }
  utcTime(): void {           // digital clock
    setInterval(() => {
this.myDate = new Date() ;
}, 1000);
}

  start(): void{              //start button
  this.startDate = new Date();
  //this.date1 = this.startDate.getTime();
  this.jamCondition = false;

  setInterval(() => {         //timer
    this.timer = new Date();
    this.timer.setTime(this.timer.getTime() - this.startDate.getTime() +82800000 );
  //  this.timer.setHours(0);
  //  this.hh =  this.timer.getHours();
  //  this.mm =  this.timer.getMinutes();
  //  this.ss =  this.timer.getSeconds();
}, 1000);
}
  stop(): void{             //stop button
  this.jamCondition = true;
  this.date1 = 0;
  this.lastJamDuration = this.timer;
  this.openDialog();
}
constructor(private dialog: MatDialog) {}      //dialog

  openDialog() {

      const dialogRef = this.dialog.open(DialogComponent, {
        width: '250px'
      });


  }


}
