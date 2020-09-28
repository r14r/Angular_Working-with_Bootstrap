import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BareComponent } from './bare.component';

describe('BareComponent', () => {
  let component: BareComponent;
  let fixture: ComponentFixture<BareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
