import { Component, OnInit } from '@angular/core';
import { Jam } from 'C:/Users/Borys.Tymoshchuk/Projects/trafficJamCalculator/trafficJam/src/app/jam';
import { JAMS } from 'C:/Users/Borys.Tymoshchuk/Projects/trafficJamCalculator/trafficJam/src/app/jams-list';


@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit {

  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Traffic overload', 'Weather', 'Obstacles', 'unknown'];
  public barChartType = 'doughnut';
  public barChartLegend = true;
  public barChartData = [
    {data: [100, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  ];

  ngOnInit() {
  }

}
