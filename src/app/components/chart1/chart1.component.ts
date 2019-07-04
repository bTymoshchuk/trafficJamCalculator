import { Component, OnInit } from '@angular/core';
import {StatisticsService} from '../../statistics.service';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})

// Chart of reasons
export class Chart1Component implements OnInit {
  public ChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public ChartLabels = [];
  public ChartType = 'doughnut';
  public ChartLegend = true;
  public ChartColors = [];
  public ChartData = [
    {data: [],
     backgroundColor: [ '#2D3A85', '#213DDB', '#3E51A8', '#7A85B7' ]},
  ];



  constructor(
    private  statisticsService: StatisticsService,
  ) {}


  ngOnInit() {
    this.statisticsService.setReasons();
    this.statisticsService.decreasingBubbleSort(this.statisticsService.Amounts, this.statisticsService.Reasons);
    this.ChartLabels = this.statisticsService.Reasons;
    this.ChartData[0].data = this.statisticsService.Amounts;
    }
}
