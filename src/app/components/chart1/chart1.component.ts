import { Component, OnInit } from '@angular/core';
import { Jam } from 'C:/Users/Borys.Tymoshchuk/Projects/trafficJamCalculator/trafficJam/src/app/jam';
import { JAMS } from 'C:/Users/Borys.Tymoshchuk/Projects/trafficJamCalculator/trafficJam/src/app/jams-list';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})

export class Chart1Component implements OnInit {
  public ChartOptions = {                                          //chart js variables
    scaleShowVerticalLines: false,
    responsive: true
  };
  public ChartLabels = [];
  public ChartType = 'doughnut';
  public ChartLegend = true;
  public ChartColors = []
  public ChartData = [
    {data: [], backgroundColor: [ "#2D3A85", "#213DDB", "#3E51A8", "#7A85B7" ]}, // TODO:
  ];

  decreasingBubbleSort( a: number[] , b:string[] ){
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
  getReasons(){                         //fulls ChartLabels and  ChartData[0].data and bubblesorts them
    if(JAMS.length>0){
      for (let i = 0; i < JAMS.length; i++) {
          if(this.ChartLabels.includes(JAMS[i].reason)){
            this.ChartData[0].data[this.ChartLabels.indexOf(JAMS[i].reason)]++;
          }else{
            this.ChartLabels.push(JAMS[i].reason);
            this.ChartData[0].data.push(1);
          }
        }
        this.decreasingBubbleSort(this.ChartData[0].data,   this.ChartLabels);
      }
    }

  constructor() { }


  ngOnInit() {
    this.getReasons();
    }
}
