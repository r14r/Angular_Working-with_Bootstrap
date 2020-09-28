import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingNavComponent } from './scrolling-nav.component';

describe('ScrollingNavComponent', () => {
  let component: ScrollingNavComponent;
  let fixture: ComponentFixture<ScrollingNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollingNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
