import { Component, OnInit } from '@angular/core';
import { Jam } from 'C:/Users/Borys.Tymoshchuk/Projects/trafficJamCalculator/trafficJam/src/app/jam';
import { JAMS } from 'C:/Users/Borys.Tymoshchuk/Projects/trafficJamCalculator/trafficJam/src/app/jams-list';



@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})

export class Chart1Component implements OnInit {
  public barChartOptions = {                                          //chart js variables
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [];
  public barChartType = 'doughnut';
  public barChartLegend = true;
  public barChartData = [
    {data: [], backgroundColor: ["#2D3A85", "#213DDB", "#3E51A8", "#7A85B7" ]}, // TODO:
  ];

  decreasingBubbleSort( a: number[] , b:number[] ){
    let n: number;
    let s: string;
    for (let i = 0; i < a.length -  1; i++) {
        for (let j = 0; j < a.length - i - 1; j++) {
            if (a[j] < a[j+1]) {
               n = a[j];
               a[j] = a[j+1];
               a[j+1] = n;
               s = b[j];
               b[j] = b[j+1];
               b[j+1] = s;
            }
        }
    }
}
  getReasons(){                         //fulls barChartLabels and barChartData[0].data and bubblesorts them
    if(JAMS.length>0){
      for (let i = 0; i < JAMS.length; i++) {
          if(this.barChartLabels.includes(JAMS[i].reason)){
            this.barChartData[0].data[this.barChartLabels.indexOf(JAMS[i].reason)]++;
          }else{
            this.barChartLabels.push(JAMS[i].reason);
            this.barChartData[0].data.push(1);
          }
        }
        this.decreasingBubbleSort(this.barChartData[0].data,   this.barChartLabels);
      }
    }

  constructor() { }


  ngOnInit() {
    this.getReasons();
    }
}
