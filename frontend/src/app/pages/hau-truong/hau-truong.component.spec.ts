import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HauTruongComponent } from './hau-truong.component';

describe('HauTruongComponent', () => {
  let component: HauTruongComponent;
  let fixture: ComponentFixture<HauTruongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HauTruongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HauTruongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
