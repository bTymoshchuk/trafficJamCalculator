import { Component, OnInit } from '@angular/core';
import { Angular5Csv} from 'angular5-csv/dist/Angular5-csv';
import {GlobalService} from '../../global.service';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})


export class CsvComponent implements OnInit {

  public downloadCSV(): void {
    // Generates a new CSV file
    new Angular5Csv(this.globalService.JAMS, 'CSV report');
  }

  constructor(
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
  }

}
