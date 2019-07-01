import { Component, OnInit } from '@angular/core';
import {ReasonsService} from 'src/app/reasons.service';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})

export class Chart1Component implements OnInit {   // the chart of reasons
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
      // TODO:
     backgroundColor: [ '#2D3A85', '#213DDB', '#3E51A8', '#7A85B7' ]},
  ];



  constructor(
    private  reasonsService: ReasonsService,
  ) {}


  ngOnInit() {
    this.reasonsService.init();
    this.reasonsService.decreasingBubbleSort(this.reasonsService.Amounts, this.reasonsService.Reasons);
    this.ChartLabels = this.reasonsService.getReasons();
    this.ChartData[0].data = this.reasonsService.getAmounts();
    }
}
