// Handles http requests, JAMS array and refresh function

import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jam } from 'src/app/jam';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {JAMS} from './jams-list';
import {MatDialog} from '@angular/material';
import {FacebookShareDialogComponent} from './components/facebook-share-dialog/facebook-share-dialog.component';





@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public JAMS: Jam[];
  public lastJam = new Jam();  // The last created jam
  public newJam = new Jam();   // Used for creating or updating jams
  public jamsUrl: string;   // http urls
  public createUrl: string; //
  public deleteUrl: string; //
  public updateUrl: string; //
  public APIurl: string;    //
  public loadingUrl = '/loading'; // Used for LoadingComponent
  public gotResponse = false;     //
  public previousFullDays: number;        // Used for checkWorkingDays()
  public prevFullDaysInitialised = false; //

  constructor(private http: HttpClient,
              private router: Router,
              private dialog: MatDialog,
              ) {
    // The lastJam should be empty on start
    this.lastJam = {id: null, reason: '', begin: null, duration: null};
    this.APIurl = 'http://localhost:8080/jams/';
    this.jamsUrl = this.APIurl + 'all';
    this.createUrl = this.APIurl + 'create';
    this.deleteUrl = this.APIurl + 'delete/';
    this.updateUrl = this.APIurl + 'update';
    this.setJams(this.getAllJams());

  }

  // Returns an observable with all jams from the server
  public getAllJams(): Observable<Jam[]> {
    return  this.http.get<Jam[]>(this.jamsUrl);
  }

  // Fills JAMS array with jams from an observable
  public setJams(obs: Observable<Jam[]>): void {
    // Remembers current router url
    this.loadingUrl = this.router.url;
    // Sets empty lastJam
    this.lastJam = {id: null, reason: '', begin: null, duration: null};
    // Navigates to LoadingComponent
    this.router.navigate(['/loading']);
    obs.subscribe(data => {
      // Sets JAMS from the observable
      this.JAMS = data;
      console.log(data);
      if (data.length > 0) {
        // Sets lastJam from the observable
        this.lastJam = data[0];
        // Checks for working days
        this.checkWorkingDays();
      }
      // Sets gotResponse to 'true', so LoadingComponent navigates back
      this.gotResponse = true;
       });
  }

  // Creates a new jam
  public createJam(jam: Jam): Observable<Jam[]> {
    return this.http.post<Jam[]>(this.createUrl, jam);
  }

  // TEMP
  public portJams(): void {
    for (const jam of JAMS) {
      this.createJam(jam).subscribe();
    }
    this.setJams(this.getAllJams());
   }

  // Deletes a jam by id
  public delete(id: number): Observable<Jam[]> {
    return this.http.get<Jam[]>(this.deleteUrl + id);
  }

  // Deletes all jams
  public deleteAll(): Observable<Jam[]> {
    return this.http.get<Jam[]>(this.deleteUrl + 'all');
  }

  // Updates an existing jam
  public updateJam(jam: Jam): Observable<Jam[]> {
   return  this.http.put<Jam[]>(this.updateUrl, jam);
  }

  // Refreshes current router page
  public refresh(): void {
    // Remembers current router url
    const url = this.router.url;
    // Navigates to the RefreshComponent
    this.router.navigateByUrl('/refresh', {skipLocationChange: true}).then(() =>
      // And back to the previous url
      this.router.navigate([url]));
  }

  // Returns the amount of working days lost in jams
  public getWorkingDays(): number {
    let totalTime = 0;
    for ( const jam of this.JAMS) {
      totalTime += jam.duration;
    }
    return Math.floor(totalTime / 28800000);
  }

  // Checks whether the amount of working days has increased
  public checkWorkingDays(): void {
    // If there is an amount of working days
    if (this.prevFullDaysInitialised) {
      if (this.previousFullDays < this.getWorkingDays()) {
        this.previousFullDays = this.getWorkingDays();
        // Calls facebook share window
        const dialogRef = this.dialog.open(FacebookShareDialogComponent, {
          width: '250px',
        });
      }
    } else {
      this.prevFullDaysInitialised = true;
      this.previousFullDays = this.getWorkingDays();
    }
  }

}
