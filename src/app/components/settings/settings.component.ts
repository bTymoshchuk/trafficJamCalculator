import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../global.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor( public globalService: GlobalService) { }


  ngOnInit() {}
}
