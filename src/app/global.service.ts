// Handles http requests, JAMS array and refresh() function

import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jam } from 'src/app/jam';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {JAMS} from './jams-list';




@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public JAMS: Jam[];
  public lastJam = new Jam();
  public newJam = new Jam();   // Used for creating or updating jams
  public jamsUrl: string;   // http urls
  public createUrl: string; //
  public deleteUrl: string; //
  public updateUrl: string; //
  public loadingUrl = '/loading'; // Used for LoadingComponent
  public gotResponse = false;     //

  constructor(private http: HttpClient,
              private router: Router,
              ) {
    // The lastJam.duration should be equal to 1 on start
    this.lastJam = {id: null, reason: '', begin: null, duration: 1};
    this.jamsUrl = 'http://localhost:8080/jams/all';
    this.createUrl = 'http://localhost:8080/jams/create';
    this.deleteUrl = 'http://localhost:8080/jams/delete/';
    this.updateUrl = 'http://localhost:8080/jams/update';
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
    // Sets lastJam.duration to 1
    this.lastJam = {id: null, reason: '', begin: null, duration: 1};
    // Navigates to LoadingComponent
    this.router.navigate(['/loading']);
    obs.subscribe(data => {
      // Sets JAMS from the observable
      this.JAMS = data;
      console.log(data);
      if (data.length > 0) {
        // Sets lastJam from the observable
        this.lastJam = data[0];
      }
      // Sets gotResponse to 'true', so LoadingComponent navigates back
      this.gotResponse = true; } );

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

}
