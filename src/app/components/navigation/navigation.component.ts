import { Component, OnInit } from '@angular/core';
import {FacebookService, LoginOptions, LoginResponse} from 'ngx-facebook';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    private fb: FacebookService,
  ) { }

  public login() {
    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
    };

    this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
      console.log('Logged in', res);
    })
      .catch((e) => {console.log(e); });
  }


  ngOnInit() {
  }

}
