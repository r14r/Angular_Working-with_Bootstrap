import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernBusinessComponent } from './modern-business.component';

describe('ModernBusinessComponent', () => {
  let component: ModernBusinessComponent;
  let fixture: ComponentFixture<ModernBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModernBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
