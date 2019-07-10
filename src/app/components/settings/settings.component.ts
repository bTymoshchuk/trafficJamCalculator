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
  // TEMP
   public fbPost( body: string) {
      this.fb.getLoginStatus().then(console.log.bind(console))
        .catch(console.error.bind(console));
      this.fb.api('/me/feed',
       'post',
       {message: body})
       .then((res) => console.log(res))
       .catch((e) => console.log(e));
   }

   public token(): string {
      console.log(this.fb.getAuthResponse());
      return  this.fb.getAuthResponse().accessToken;
   }


  ngOnInit() {}
}
