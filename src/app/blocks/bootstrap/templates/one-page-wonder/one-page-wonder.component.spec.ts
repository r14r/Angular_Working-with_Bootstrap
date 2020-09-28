import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePageWonderComponent } from './one-page-wonder.component';

describe('OnePageWonderComponent', () => {
  let component: OnePageWonderComponent;
  let fixture: ComponentFixture<OnePageWonderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnePageWonderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePageWonderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
