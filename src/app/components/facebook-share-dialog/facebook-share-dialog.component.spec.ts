import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookShareDialogComponent } from './facebook-share-dialog.component';

describe('FacebookShareDialogComponent', () => {
  let component: FacebookShareDialogComponent;
  let fixture: ComponentFixture<FacebookShareDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookShareDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookShareDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
