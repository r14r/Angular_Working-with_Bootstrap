import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSidebarComponent } from './simple-sidebar.component';

describe('SimpleSidebarComponent', () => {
  let component: SimpleSidebarComponent;
  let fixture: ComponentFixture<SimpleSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
