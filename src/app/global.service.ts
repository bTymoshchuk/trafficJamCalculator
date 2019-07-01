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
  public newJam = new Jam();
  public jamsUrl: string;
  public createUrl: string;
  public deleteUrl: string;
  public updateUrl: string;
  public loadingUrl = '/loading';
  public gotResponse = false;



  constructor(private http: HttpClient,
              private router: Router,
              ) {
    this.lastJam = {id: null, reason: '', begin: 1550473513000, duration: 1};
    this.jamsUrl = 'http://localhost:8080/jams/all';
    this.createUrl = 'http://localhost:8080/jams/create';
    this.deleteUrl = 'http://localhost:8080/jams/delete/';
    this.updateUrl = 'http://localhost:8080/jams/update';
    this.setJams(this.getAllJams());

  }


  public getAllJams(): Observable<Jam[]> {            // returns an observable with all jams from the server
    return  this.http.get<Jam[]>(this.jamsUrl);
  }

  public setJams(obs: Observable<Jam[]>): void {      // fills JAMS array with jams from an observable
    this.loadingUrl = this.router.url;
    this.lastJam = {id: null, reason: '', begin: 1550473513000, duration: 1};
    this.router.navigate(['/loading']);
    obs.subscribe(data => {
      this.JAMS = data;
      console.log(data);
      if (data.length > 0) {
        this.lastJam = data[0];
      }
      this.gotResponse = true; } );

  }

  public createJam(jam: Jam): Observable<Jam[]> {     // creates a new jam
    return this.http.post<Jam[]>(this.createUrl, jam);
  }

  public portJams(): void {       // TEMP
    for (const jam of JAMS) {
      this.createJam(jam).subscribe();
    }
    this.setJams(this.getAllJams());
   }

  public delete(id: number): Observable<Jam[]> {      // deletes a jam by id
    return this.http.get<Jam[]>(this.deleteUrl + id);
  }

  public deleteAll(): Observable<Jam[]> {             // deletes all jams
    return this.http.get<Jam[]>(this.deleteUrl + 'all');
  }

  public updateJam(jam: Jam): Observable<Jam[]> {     // updates an existing jam
   return  this.http.put<Jam[]>(this.updateUrl, jam);
  }

  public refresh(): void {
    const url = this.router.url;                      // refreshes current page
    this.router.navigateByUrl('/refresh', {skipLocationChange: true}).then(() =>
      this.router.navigate([url]));
  }

}
