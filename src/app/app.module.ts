import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { JamsComponent } from './components/jams/jams.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatPaginatorModule ,
  MatSortModule,
}from '@angular/material';
import { ReportComponent } from './components/report/report.component';
import {MatSelectModule} from '@angular/material/select';
import { NavigationComponent } from './components/navigation/navigation.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input'
import {CdkTableModule} from '@angular/cdk/table';
import {MatDialogModule} from "@angular/material";
import { DialogComponent } from './components/dialog/dialog.component';
import { GlobalService } from './global.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import { ChartsModule } from 'ng2-charts';
import { Chart1Component } from './components/chart1/chart1.component';
import { DaySpinnerComponent } from './components/day-spinner/day-spinner.component';
import { StatscardComponent } from './components/statscard/statscard.component';
import { AddjamComponent } from './components/addjam/addjam.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/';
import { Chart2Component } from './components/chart2/chart2.component';





@NgModule({
  exports: [


    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,

    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    BrowserAnimationsModule ,
    MatInputModule,
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MainComponent,
    DialogComponent,
    MatProgressBarModule,
    MatProgressSpinnerModule,




  ],
  declarations: [
    AppComponent,
    MainComponent,
    SettingsComponent,
    StatisticsComponent,
    JamsComponent,
    ReportComponent,
    NavigationComponent,
    DialogComponent,
    Chart1Component,
    DaySpinnerComponent,
    StatscardComponent,
    AddjamComponent,
    Chart2Component,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule ,
    MatSortModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatCardModule,
    ChartsModule,
    MatDatepickerModule,
    MatNativeDateModule



  ],
  providers: [ GlobalService, MatDatepickerModule ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent, AddjamComponent]
})
export class AppModule { }
