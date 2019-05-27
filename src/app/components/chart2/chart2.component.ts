import { Component, OnInit } from '@angular/core';

import { Jam } from 'C:/Users/Borys.Tymoshchuk/Projects/trafficJamCalculator/trafficJam/src/app/jam';
import { JAMS } from 'C:/Users/Borys.Tymoshchuk/Projects/trafficJamCalculator/trafficJam/src/app/jams-list';
import { Label} from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';




@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit {
  amounts:number[] = [0, 0, 0, 0, 0, 0, 0];
  public barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
    	display: false
    },
  };
  public barChartLabels: Label[] = ['Mon', 'Tue', 'Wed', 'Thur', 'Fry', 'Sat', 'Sun'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0, 0, 0, 0], label: 'Jams', backgroundColor:'rgba(63, 81, 181,0.85)', borderColor:'rgba(63, 81, 181,0.85)', hoverBackgroundColor:'#3F51B5'},
  ];
  date = new Date();

  getDays(){                                  //fulls barChartData[0].data
    for (let i = 0; i < JAMS.length; i++) {
      this.date.setTime(JAMS[i].begin);
      let index = this.date.getDay() -1;
      if (index < 0) {
          index = 6;
      }
      this.amounts[index]  =   this.amounts[index] + 1 ;
      this.barChartData[0].data = this.amounts;
    }
  }

  constructor() { }

  ngOnInit() {
    this.getDays();
  }

}
