import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
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
  MatPaginatorModule,
  MatProgressBarModule,
  MatSortModule,
} from '@angular/material';
import { ReportComponent } from './components/report/report.component';
import {MatSelectModule} from '@angular/material/select';
import { NavigationComponent } from './components/navigation/navigation.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {CdkTableModule} from '@angular/cdk/table';
import {MatDialogModule} from '@angular/material';
import { DialogComponent } from './components/dialog/dialog.component';
import { GlobalService } from './global.service';
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
import {MatTabsModule} from '@angular/material/tabs';
import { ChartsCardComponent } from './components/charts-card/charts-card.component';
import { Statscard2Component } from './components/statscard2/statscard2.component';
import { HttpClientModule } from '@angular/common/http';
import {AppLoadService} from './app-load.service';
import { RefreshComponent } from './components/refresh/refresh.component';
import { LoadingComponent } from './components/loading/loading.component';
import {FacebookModule, FacebookService} from 'ngx-facebook';
import { EditJamComponent } from './components/edit-jam/edit-jam.component';
import {StatisticsService} from './statistics.service';
import { CsvComponent } from './components/csv/csv.component';
import { FacebookShareDialogComponent } from './components/facebook-share-dialog/facebook-share-dialog.component';



@NgModule({
  exports: [






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
    ChartsCardComponent,
    Statscard2Component,
    RefreshComponent,
    LoadingComponent,
    EditJamComponent,
    CsvComponent,
    FacebookShareDialogComponent,



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
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatCardModule,
    ChartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    HttpClientModule,
    MatProgressBarModule,
    FacebookModule.forRoot(),


  ],
  providers: [ GlobalService, MatDatepickerModule, StatisticsService, AppLoadService , FacebookService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent, AddjamComponent, EditJamComponent, FacebookShareDialogComponent],
  schemas: []
})
export class AppModule { }
