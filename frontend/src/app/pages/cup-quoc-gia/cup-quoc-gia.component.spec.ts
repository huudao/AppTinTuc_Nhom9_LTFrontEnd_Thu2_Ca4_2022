import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupQuocGiaComponent } from './cup-quoc-gia.component';

describe('CupQuocGiaComponent', () => {
  let component: CupQuocGiaComponent;
  let fixture: ComponentFixture<CupQuocGiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CupQuocGiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CupQuocGiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
