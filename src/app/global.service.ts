import { Injectable } from '@angular/core';
import { MainComponent } from './components/main/main.component';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
 duration = 0;

 setDuration(a: number){
   this.duration = a;
 }

 getDuration(){
   return this.duration;
 }
  constructor() { }
}
