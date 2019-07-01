import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../global.service';
import {FacebookService} from 'ngx-facebook';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor( private globalService: GlobalService,
               private fb: FacebookService) { }

   public fbPost( body: string) {                               // TEMP
     this.fb.api('/100005684555917/feed',
       'post',
       {message: body})
       .then((res) => console.log(res))
       .catch((e) => console.log(e));
   }

  ngOnInit() {}
}
