import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBigPictureComponent } from './the-big-picture.component';

describe('TheBigPictureComponent', () => {
  let component: TheBigPictureComponent;
  let fixture: ComponentFixture<TheBigPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBigPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBigPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
