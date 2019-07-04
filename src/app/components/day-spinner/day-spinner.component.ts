import { Component, OnInit } from '@angular/core';
import {StatisticsService} from '../../statistics.service';


@Component({
  selector: 'app-day-spinner',
  templateUrl: './day-spinner.component.html',
  styleUrls: ['./day-spinner.component.css']
})
export class DaySpinnerComponent implements OnInit {
  public spinnerValue = 0;
  public mode = 'determinate';
  public currentDayTime = 0;

  constructor(
    public statisticsService: StatisticsService,
  ) { }


  ngOnInit() {
    this.currentDayTime = this.statisticsService.getCurrentDayTime();
    this.spinnerValue = this.statisticsService.getSpinnerValue();
  }

}
