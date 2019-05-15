import { Injectable } from '@angular/core';
import { MainComponent } from './components/main/main.component';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
 duration = 0;
 start = 0;
 reason = "";
 jamStatus = false ;

 setDuration(a: number){
   this.duration = a;
 }

 getDuration(){
   return this.duration;
 }

 setStart(a: number){
   this.start = a;
 }

 getStart(){
   return this.start;
 }

 setReason(a: string){
   this.reason = a;
 }

 getReason(){
   return this.reason;
 }

 setStatus(a: boolean){
   this.jamStatus = a;
 }

 getStatus(){
   return this.jamStatus;
 }

 toggleStatus(){
   this.jamStatus = !this.jamStatus;
 }
  constructor() { }
}
