import { Component, OnInit } from '@angular/core';
import {StatisticsService} from '../../statistics.service';


@Component({
  selector: 'app-statscard',
  templateUrl: './statscard.component.html',
  styleUrls: ['./statscard.component.css']
})
export class StatscardComponent implements OnInit {
  public workingDays = 0;

  constructor(
    public statisticsService: StatisticsService,
  ) { }

  ngOnInit() {
        this.workingDays = this.statisticsService.getWorkingDays();
  }

}
