import { Component, OnInit, Input } from '@angular/core';
import { MainComponent } from 'src/app/components/main/main.component';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { GlobalService } from 'src/app/global.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(
      public dialogRef: MatDialogRef<DialogComponent>,
      private globalService: GlobalService
  ) {}

  public duration = this.globalService.newJam.duration;

  public closeDialog(): void {
      this.dialogRef.close();
    }

  ngOnInit() {
  }

}
