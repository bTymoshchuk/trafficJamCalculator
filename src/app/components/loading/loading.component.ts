import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../global.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {   // used when waiting for server response,
                                                    // automatically redirects to the last used component after the server response

  public check() {
    if (this.globalService.gotResponse) {
      this.router.navigate([this.globalService.loadingUrl]);
      this.globalService.gotResponse = false;
      this.globalService.loadingUrl = '/loading';
    } else {
      setTimeout(() => {
        this.check();
      }, 50);
    }
  }

  constructor( public globalService: GlobalService,
               public router: Router) { }

  ngOnInit() {
  if (this.globalService.loadingUrl !== '/loading') {
    this.check();
  } else {
      this.globalService.gotResponse = false;
      this.globalService.loadingUrl = '/loading';
      this.router.navigate(['/main']);
    }
  }

}
