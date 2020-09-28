import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopHomepageComponent } from './shop-homepage.component';

describe('ShopHomepageComponent', () => {
  let component: ShopHomepageComponent;
  let fixture: ComponentFixture<ShopHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
