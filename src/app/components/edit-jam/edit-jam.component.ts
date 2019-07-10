import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {GlobalService} from '../../global.service';

@Component({
  selector: 'app-edit-jam',
  templateUrl: './edit-jam.component.html',
  styleUrls: ['./edit-jam.component.css']
})
export class EditJamComponent implements OnInit {

  // Maximal start date on the datepicker
  public maxDate = new Date();
  public reason = 'Unknown';
  public startDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), this.maxDate.getDay(), 0);
  public startMinutes = '00';
  public startHours = '00';
  public durationHours = '00';
  public durationMinutes = '01';
  constructor(
    public globalService: GlobalService,
    public dialogRef: MatDialogRef<EditJamComponent>,
  ) { }

  // Closes the dialog window
  public closeDialog(): void {
    this.dialogRef.close();
  }

  // Submit button
  public editJam() {
    // Sets newJam's new parameters
    this.globalService.newJam.reason = this.reason;
    this.startDate.setMinutes(parseInt(this.startMinutes, 10));
    this.startDate.setHours(parseInt(this.startHours, 10));
    this.globalService.newJam.begin = this.startDate.getTime();
    this.globalService.newJam.duration = parseInt(this.durationHours, 10) * 3600000 + parseInt(this.durationMinutes, 10) * 60000;
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(() => {
      // Saves changes and gets a new JAMS array on GlobalService
      this.globalService.setJams(this.globalService.updateJam(this.globalService.newJam));
    });
  }

  ngOnInit() { }
}
