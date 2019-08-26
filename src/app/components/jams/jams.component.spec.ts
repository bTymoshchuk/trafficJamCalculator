import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JamsComponent } from './jams.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {GlobalService} from '../../global.service';
import {Jam} from '../../jam';
import {MatDialogModule, MatPaginatorModule, MatTableDataSource, MatTableModule} from '@angular/material';
import {Observable} from 'rxjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('JamsComponent', () => {
  let component: JamsComponent;
  let fixture: ComponentFixture<JamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA],
      providers: [ {provide: GlobalService, useClass: MockGlobalService}],
      imports: [MatTableModule, MatPaginatorModule, MatDialogModule, BrowserAnimationsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select jams', () => {
    component.onSelect(component.globalService.newJam);
    expect(component.selectedJam).toBe(component.globalService.newJam);
  });

  class MockGlobalService {
    public JAMS: Jam[] =
      [{id: 1, reason: 'Obstacles', begin: 1550473513000, duration: 5351822},
      {id: 2, reason: 'Road accident', begin: 1550559757000, duration: 4906187 },
      {id: 3, reason: 'Traffic overload', begin: 1550646386000, duration: 3501824 },
      {id: 4, reason: 'Weather', begin:  82800000, duration: 3860559 },
      {id: 5, reason: 'Unknown', begin:  82800000, duration: 515875 },
      {id: 6, reason: 'Road accident', begin:  82800000, duration: 2827687 },
      {id: 7, reason: 'Obstacles', begin:  82800000, duration: 29709499 }];
    public newJam: Jam = {id: 2, reason: 'Road accident', begin: 1550559757000, duration: 4906187 };
    delete(): Observable<Jam[]> {
      return new Observable();
    }
    setJams(obs: Observable<Jam[]>) {
    }

  }
});
