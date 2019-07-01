import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppLoadService} from '../../app-load.service';

export function app_init(appLoadService: AppLoadService) {
  return() => appLoadService.initializeApp();
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AppLoadService,
    { provide : APP_INITIALIZER, useFactory: app_init, deps: [AppLoadService], multi: false}
  ]
})
export class AppLoadModule { }
