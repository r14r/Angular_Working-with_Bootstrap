import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartbootstrapComponent } from './startbootstrap.component';

describe('StartbootstrapComponent', () => {
  let component: StartbootstrapComponent;
  let fixture: ComponentFixture<StartbootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartbootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartbootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
