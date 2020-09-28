import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCasualComponent } from './business-casual.component';

describe('BusinessCasualComponent', () => {
  let component: BusinessCasualComponent;
  let fixture: ComponentFixture<BusinessCasualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessCasualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCasualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
