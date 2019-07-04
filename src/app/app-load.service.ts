import {Injectable} from '@angular/core';
import {GlobalService} from './global.service';
import {FacebookService, InitParams} from 'ngx-facebook';

@Injectable({
  providedIn: 'root'
})
export class AppLoadService {

    constructor(
      private globalService: GlobalService,
      private fb: FacebookService,
    ) { }
  public initializeApp(): void {
      this.globalService.setJams(this.globalService.getAllJams());
      const initParams: InitParams = {
        appId      : '447862259104872',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.3'
      };
      this.fb.init(initParams);
    }
}
