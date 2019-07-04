import { Component, OnInit } from '@angular/core';
import {StatisticsService} from '../../statistics.service';

@Component({
  selector: 'app-statscard2',
  templateUrl: './statscard2.component.html',
  styleUrls: ['./statscard2.component.css']
})
export class Statscard2Component implements OnInit {
  s = ''; // if there are more then 1 jams, becomes 's'
  averageDuration = 0;
  mostCommonReason = '';

  constructor(
    private statisticsService: StatisticsService,
  ) { }

  ngOnInit() {
        this.statisticsService.setReasons();
        this.averageDuration = this.statisticsService.getAverageDuration();
        this.mostCommonReason = this.statisticsService.getMostCommonReasons();
        this.s = this.statisticsService.s;

  }

}
