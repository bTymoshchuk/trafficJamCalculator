/* tslint:disable:no-unused-expression */
import { Component, OnInit } from '@angular/core';
import { Angular5Csv} from 'angular5-csv/dist/Angular5-csv';
import {GlobalService} from '../../global.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css'],
  providers: [DatePipe]
})


export class CsvComponent implements OnInit {

  public downloadCSV(): void {
    // Generates a new CSV file
    new Angular5Csv(this.globalService.JAMS, this.datePipe.transform(new Date(), 'dd-MM-yyyy') + ' tJC report');
  }

  constructor(
    private globalService: GlobalService,
    private datePipe: DatePipe,
  ) { }

  ngOnInit() {
  }

}
