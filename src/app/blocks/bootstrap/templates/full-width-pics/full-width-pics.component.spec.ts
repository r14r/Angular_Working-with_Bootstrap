import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullWidthPicsComponent } from './full-width-pics.component';

describe('FullWidthPicsComponent', () => {
  let component: FullWidthPicsComponent;
  let fixture: ComponentFixture<FullWidthPicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullWidthPicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullWidthPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
