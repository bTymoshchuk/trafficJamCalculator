import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {GlobalService} from '../../global.service';

@Component({
  selector: 'app-addjam',
  templateUrl: './addjam.component.html',
  styleUrls: ['./addjam.component.css']
})
export class AddjamComponent implements OnInit {
  public maxDate = new Date();
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

  public closeDialog(): void {
    this.dialogRef.close();
    this.globalService.refresh();
    }

  public createNewJam() {
    this.globalService.newJam.id = null;
    this.globalService.newJam.reason = this.reason;
    this.startDate.setMinutes(parseInt(this.startMinutes, 10));
    this.startDate.setHours(parseInt(this.startHours, 10));
    this.globalService.newJam.begin = this.startDate.getTime();
    this.globalService.newJam.duration = parseInt(this.durationHours, 10) * 3600000 + parseInt(this.durationMinutes, 10) * 60000;
    this.globalService.setJams(this.globalService.createJam(this.globalService.newJam));
    this.closeDialog();
  }

  ngOnInit() {}

}
