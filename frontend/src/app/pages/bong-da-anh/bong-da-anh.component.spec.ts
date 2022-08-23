import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BongDaAnhComponent } from './bong-da-anh.component';

describe('BongDaAnhComponent', () => {
  let component: BongDaAnhComponent;
  let fixture: ComponentFixture<BongDaAnhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BongDaAnhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BongDaAnhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
