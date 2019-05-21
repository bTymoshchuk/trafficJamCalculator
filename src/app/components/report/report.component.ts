import { Component, OnInit } from '@angular/core';
import { Jam } from 'C:/Users/Borys.Tymoshchuk/Projects/trafficJamCalculator/trafficJam/src/app/jam';
import { JAMS } from 'C:/Users/Borys.Tymoshchuk/Projects/trafficJamCalculator/trafficJam/src/app/jams-list';
import { DatePipe } from '@angular/common';
declare var jsPDF: any;

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [DatePipe]
})
export class ReportComponent implements OnInit {

  constructor(private datePipe: DatePipe) {
}
  ngOnInit() {
  }

  downloadPDF(){                                              //jsPDF report
    let head = [["Begin", "Duration", "Reason"]];
    let body = [];
    for (let i = 0; i < JAMS.length; i++) {
      body.push([  this.datePipe.transform(JAMS[i].begin , 'yyyy-dd-MM HH:mm:ss') ,
                this.datePipe.transform(JAMS[i].duration , 'HH:mm:ss' , '+0000')
                ,JAMS[i].reason]) ;
    }
    let doc = new jsPDF();
    doc.autoTable({head, body, theme:'plain'},);
    doc.save('table.pdf');
  }

}
