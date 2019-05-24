import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-addjam',
  templateUrl: './addjam.component.html',
  styleUrls: ['./addjam.component.css']
})
export class AddjamComponent implements OnInit {
  maxDate = new Date();
  constructor(
    public dialogRef: MatDialogRef<AddjamComponent>,
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
    }

  addJam(){
    this.closeDialog();
  }

  ngOnInit(){}

}
