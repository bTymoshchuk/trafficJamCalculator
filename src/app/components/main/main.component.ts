import { Component, OnInit, Input } from '@angular/core';
import{Jam} from 'src/app/jam';
import {MatSelectModule} from '@angular/material/select';
import {MatDialog, MatDialogRef} from "@angular/material";
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  myDate = new Date();
  startDate = new Date();
  date1 = 0;
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
  this.timer = new Date();
  this.globalService.setStatus(true);
  this.timer.setTime(this.timer.getTime() - this.startDate.getTime() );
  setInterval(() => {         //timer
    this.timer = new Date();
    this.timer.setTime(this.timer.getTime() - this.startDate.getTime() );
    }, 1000);
    this.jamCondition = false;
}
constructor(
   private globalService: GlobalService,
   private dialog: MatDialog
 ) { }
  stop(): void{             //stop button
  this.jamCondition = true;
  this.lastJamDuration = this.timer;
  this.globalService.setDuration(this.lastJamDuration.getTime());
  this.globalService.setStatus(false);
  this.openDialog();
}
cancel(): void{            //cancel button
  this.jamCondition = true;
  this.globalService.setStatus(false);
}



  openDialog() {          //dialog

      const dialogRef = this.dialog.open(DialogComponent, {
        width: '250px'
      });


  }


}
