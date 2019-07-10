import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {GlobalService} from '../../global.service';

@Component({
  selector: 'app-addjam',
  templateUrl: './addjam.component.html',
  styleUrls: ['./addjam.component.css']
})
export class AddjamComponent implements OnInit {
  public maxDate = new Date();    // Maximal start date limit on the datepicker
  public reason = 'Unknown';
  public startDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), this.maxDate.getDay(), 0);
  public startMinutes = '00';
  public startHours = '00';
  public durationHours = '00';
  public durationMinutes = '01';
  constructor(
    public globalService: GlobalService,
    public dialogRef: MatDialogRef<AddjamComponent>,
  ) { }

  // Closes the window
  public closeDialog(): void {
    this.dialogRef.close();
    }

  public createNewJam() {
    // Sets newJam's id to null in order not to update the existing jam
    this.globalService.newJam.id = null;
    // Sets newJam's new parameters
    this.globalService.newJam.reason = this.reason;
    this.startDate.setMinutes(parseInt(this.startMinutes, 10));
    this.startDate.setHours(parseInt(this.startHours, 10));
    this.globalService.newJam.begin = this.startDate.getTime();
    this.globalService.newJam.duration = parseInt(this.durationHours, 10) * 3600000 + parseInt(this.durationMinutes, 10) * 60000;
    this.closeDialog();
    this.dialogRef.afterClosed().subscribe(() => {
      // Creates a new jam and gets a new JAMS array on GlobalService
      this.globalService.setJams(this.globalService.createJam(this.globalService.newJam));
    });
  }


  ngOnInit() {}

}
