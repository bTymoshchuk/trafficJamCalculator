import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-jamstop',
  templateUrl: './jamstop.component.html',
  styleUrls: ['./jamstop.component.css']
})
export class JamstopComponent implements OnInit {
  myDate = new Date();

  constructor() { }

  ngOnInit() {}

}
