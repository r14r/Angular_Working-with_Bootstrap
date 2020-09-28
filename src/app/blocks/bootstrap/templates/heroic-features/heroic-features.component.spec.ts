import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroicFeaturesComponent } from './heroic-features.component';

describe('HeroicFeaturesComponent', () => {
  let component: HeroicFeaturesComponent;
  let fixture: ComponentFixture<HeroicFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroicFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroicFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
