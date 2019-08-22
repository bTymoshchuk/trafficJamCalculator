import {async, ComponentFixture, TestBed, tick} from '@angular/core/testing';
import { NavigationComponent } from './navigation.component';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from '@angular/core';
import {FacebookService} from 'ngx-facebook';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {RefreshComponent} from '../refresh/refresh.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent, RefreshComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA],
      providers: [ FacebookService, Location],
      imports: [ RouterTestingModule.withRoutes([
        { path: 'main' , component: RefreshComponent},
        { path: 'settings' , component: RefreshComponent},
        { path: 'statistics' , component: RefreshComponent}])],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
