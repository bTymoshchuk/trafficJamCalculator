import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import {FacebookService, UIResponse} from 'ngx-facebook';


@Component({
  selector: 'app-facebook-share-dialog',
  templateUrl: './facebook-share-dialog.component.html',
  styleUrls: ['./facebook-share-dialog.component.css']
})
export class FacebookShareDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FacebookShareDialogComponent>,
    private fb: FacebookService,

  ) { }

  public fbShare(): void {
    this.fb.ui({
      method: 'share',
      href: 'https://btymoshchuk.github.io/trafficJamCalculator/'
    }).then((res: UIResponse) => {
      console.log('Got the users profile', res);
    })
      .catch((e) => { console.log(e); });
  }


  public close(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
