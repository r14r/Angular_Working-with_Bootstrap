import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessFrontpageComponent } from './business-frontpage.component';

describe('BusinessFrontpageComponent', () => {
  let component: BusinessFrontpageComponent;
  let fixture: ComponentFixture<BusinessFrontpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessFrontpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessFrontpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
