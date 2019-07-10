import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { GlobalService } from 'src/app/global.service';
import {FacebookService, UIResponse} from 'ngx-facebook';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(
      public dialogRef: MatDialogRef<DialogComponent>,
      private globalService: GlobalService,
      private fb: FacebookService,
  ) {}

  public duration = this.globalService.newJam.duration;

  public fbShare(): void {
    this.fb.ui({
      method: 'share',
      href: 'https://btymoshchuk.github.io/trafficJamCalculator/'
    }).then((res: UIResponse) => {
      console.log('Got the users profile', res);
    })
      .catch((e) => { console.log(e); });
  }

  public closeDialog(): void {
      this.dialogRef.close();
    }

  ngOnInit() {
  }

}
