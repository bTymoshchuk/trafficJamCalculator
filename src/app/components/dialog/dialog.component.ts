import { Component, OnInit } from '@angular/core';
import { MainComponent } from 'src/app/components/main/main.component';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {


  constructor(
      public dialogRef: MatDialogRef<DialogComponent>) {}

  closeDialog(): void {
      this.dialogRef.close();
    }

  ngOnInit() {
  }

}
