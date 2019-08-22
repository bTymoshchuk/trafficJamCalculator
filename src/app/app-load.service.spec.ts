/* tslint:disable */
import { TestBed } from '@angular/core/testing';
import { AppLoadService } from './app-load.service';
import {GlobalService} from './global.service';
import {FacebookService, InitParams} from 'ngx-facebook';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {MatDialogModule} from '@angular/material';

describe('AppLoadService', () => {

  let service: AppLoadService;

  beforeEach(async () => {
    return TestBed.configureTestingModule({
      providers: [{provide: GlobalService, useValue:{}}, AppLoadService, FacebookService ],
      imports:[HttpClientModule, RouterTestingModule, MatDialogModule]
    });
  });

  beforeEach(() => {
    service = TestBed.get(AppLoadService);
  })


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have correct facebook initialisation params', ()=>{
    expect(service.initParams.appId).toBe('447862259104872');
    expect(service.initParams.cookie).toBeTruthy();
    expect(service.initParams.xfbml).toBeTruthy();
    expect(service.initParams.version).toBe('v3.3');

  })
});
