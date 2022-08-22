import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinchuyennhuongComponent } from './tinchuyennhuong.component';

describe('TinchuyennhuongComponent', () => {
  let component: TinchuyennhuongComponent;
  let fixture: ComponentFixture<TinchuyennhuongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinchuyennhuongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TinchuyennhuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
