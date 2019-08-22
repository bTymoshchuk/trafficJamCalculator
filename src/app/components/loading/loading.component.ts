import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../../global.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})

// Used when waiting for server response on GlobalService.setJams,
// Automatically redirects to the last used component after the server response
export class LoadingComponent implements OnInit {

  // Checks for server response
  public check() {
    if (this.globalService.gotResponse) {
      this.router.navigate([this.globalService.loadingUrl]);
      this.globalService.gotResponse = false;
      this.globalService.loadingUrl = '/loading';
    } else {
      setTimeout(() => {
        this.check();
      }, 10);
    }
  }

  constructor( public globalService: GlobalService,
               public router: Router) { }

  ngOnInit() {
    // If the GlobalService.loadingUrl === '/loading', you've navigated to this component eventually
    // And will be redirected to the main page
    // Else waiting for response
  if (this.globalService.loadingUrl !== '/loading') {
    this.check();
  } else {
      this.globalService.gotResponse = false;
      this.globalService.loadingUrl = '/loading';
      this.router.navigate(['/main']) ;
    }
  }

}
