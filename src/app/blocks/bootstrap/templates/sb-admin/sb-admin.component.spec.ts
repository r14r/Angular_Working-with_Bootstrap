import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbAdminComponent } from './sb-admin.component';

describe('SbAdminComponent', () => {
  let component: SbAdminComponent;
  let fixture: ComponentFixture<SbAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
