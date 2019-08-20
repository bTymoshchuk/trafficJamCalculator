import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingComponent } from './loading.component';
import {MatProgressBarModule} from '@angular/material';
import {GlobalService} from '../../global.service';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let mockRouter ={
    navigate: jasmine.createSpy('navigate')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingComponent ],
      imports: [ MatProgressBarModule],
      providers: [{ provide: GlobalService, useClass: MockGlobalService}, { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check ', () => {
    component.check();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
  });

  class MockGlobalService {
    public gotResponse = true;
    public loadingUrl = '/';
  }
});
