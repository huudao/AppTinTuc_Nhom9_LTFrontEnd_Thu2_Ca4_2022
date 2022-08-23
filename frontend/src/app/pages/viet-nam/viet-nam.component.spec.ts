import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VietNamComponent } from './viet-nam.component';

describe('VietNamComponent', () => {
  let component: VietNamComponent;
  let fixture: ComponentFixture<VietNamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VietNamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VietNamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
