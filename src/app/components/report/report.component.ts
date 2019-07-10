import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {GlobalService} from '../../global.service';
declare var jsPDF: any;

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [DatePipe]
})
export class ReportComponent implements OnInit {

  constructor(private datePipe: DatePipe,
              private globalService: GlobalService) {
}
  ngOnInit() {
  }
  // jsPDF report
  public downloadPDF() {
    const head = [['Begin', 'Duration', 'Reason']];
    const body = [];
    for (const jam of this.globalService.JAMS) {
      body.push([  this.datePipe.transform(jam.begin , 'dd-MM-yyyy HH:mm:ss') ,
                this.datePipe.transform(jam.duration , 'HH:mm:ss' , '+0000')
                , jam.reason]) ;
    }
    const doc = new jsPDF();
    doc.autoTable({head, body, theme: 'plain'}, );
    doc.save(this.datePipe.transform(new Date(), 'dd-MM-yyyy') + ' tJC report.pdf');
  }

}
