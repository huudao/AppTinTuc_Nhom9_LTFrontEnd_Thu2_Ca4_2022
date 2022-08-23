import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BongDaPhapComponent } from './bong-da-phap.component';

describe('BongDaPhapComponent', () => {
  let component: BongDaPhapComponent;
  let fixture: ComponentFixture<BongDaPhapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BongDaPhapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BongDaPhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
