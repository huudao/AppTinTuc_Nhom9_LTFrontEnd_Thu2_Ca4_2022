import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinChuyenNhuongComponent } from './tin-chuyen-nhuong.component';

describe('TinChuyenNhuongComponent', () => {
  let component: TinChuyenNhuongComponent;
  let fixture: ComponentFixture<TinChuyenNhuongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinChuyenNhuongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TinChuyenNhuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
