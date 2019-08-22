import { TestBed } from '@angular/core/testing';

import { GlobalService } from './global.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule,
        HttpTestingController  } from '@angular/common/http/testing';
import {MatDialogModule} from '@angular/material';
import {DialogComponent} from './components/dialog/dialog.component';
import {FacebookShareDialogComponent} from './components/facebook-share-dialog/facebook-share-dialog.component';
import {Router} from '@angular/router';
import {LoadingComponent} from './components/loading/loading.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RefreshComponent} from './components/refresh/refresh.component';
describe('GlobalService', () => {
  let httpTestingController: HttpTestingController;
  let service: GlobalService;
  let router: Router
  const mockJam = [{
    id: 1,
    reason: 'Unknown',
    begin: 123456789,
    duration: 1234,
  }];
  const mockJAMS =  [{id: 1, reason: 'Obstacles', begin: 1550473513000, duration: 5351822},
    {id: 2, reason: 'Road accident', begin: 1550559757000, duration: 4906187 },
    {id: 3, reason: 'Traffic overload', begin: 1550646386000, duration: 3501824 },
    {id: 4, reason: 'Weather', begin:  82800000, duration: 3860559 },
    {id: 5, reason: 'Unknown', begin:  82800000, duration: 515875 },
    {id: 6, reason: 'Road accident', begin:  82800000, duration: 2827687 },
    {id: 7, reason: 'Obstacles', begin:  82800000, duration: 909499 + 28800000 }];
 // var windowMock = { cfgApiBaseUrl: 'localhost:8080/'};
  beforeEach(
    () => {
    TestBed.configureTestingModule({
      providers: [DialogComponent, FacebookShareDialogComponent],
      imports: [ RouterTestingModule.withRoutes([{ path: 'loading', component: RefreshComponent}]),
                 HttpClientTestingModule, MatDialogModule],
      declarations: [RefreshComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(GlobalService);
    router = TestBed.get(Router);
    const initRequest = httpTestingController.expectOne('undefinedjams/all');
  });


  afterEach(() => {
    httpTestingController.verify();
  });

  /*it('should do an initialisation request', () => {
    initRequest = httpTestingController.expectOne('undefinedjams/all');
    expect(initRequest.request.method).toBe('GET');
    initRequest.flush({});
  });*/

  it('should be created', () => {

    expect(service).toBeTruthy();
  });

  it('should get the list of jams ', () => {

    service.getAllJams().subscribe((data) => {
      expect(data[0]).toBe(mockJam[0]);
    });

    const req = httpTestingController.expectOne('undefinedjams/all');
    expect(req.request.method).toBe('GET');
    req.flush(mockJam);
  });

  it('should create a jam', () => {
    service.newJam = mockJam[0];
    service.createJam(service.newJam).subscribe((data) => {
      expect(data).toBe(mockJam);
    });

    const req = httpTestingController.expectOne('undefinedjams/create');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toBe(mockJam[0]);
    req.flush(mockJam);
  });

  it('should edit jams', () => {
    service.updateJam(mockJam[0]).subscribe((data) => {
      expect(data).toBe(mockJam);
    });

    const req = httpTestingController.expectOne('undefinedjams/update');
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toBe(mockJam[0]);
    req.flush(mockJam);
  });

  /*it( 'should delete jams', () => {
    service.delete(0).subscribe((data) => {
      expect(data).toBe([]);
    });

    const req = httpTestingController.expectOne('undefinedjams/delete/0');
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('should delete all jams', () => {
    service.deleteAll().subscribe((data) => {
      expect(data).toBe([]);
    });

    const req = httpTestingController.expectOne('undefinedjams/delete/all');
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });*/

  it('should get server response and set the JAMS array with an observable', () => {
    expect(service.gotResponse).toBeFalsy();
    const navigateSpy = spyOn(router, 'navigate');
    service.setJams(service.getAllJams());

    const req = httpTestingController.expectOne('undefinedjams/all');
    expect(req.request.method).toBe('GET');
    req.flush(mockJAMS);
    expect(service.JAMS).toBe(mockJAMS);
    expect(navigateSpy).toHaveBeenCalledWith(['/loading']);
    expect(service.gotResponse).toBeTruthy();
  });

});
