import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BongDaNuComponent } from './bong-da-nu.component';

describe('BongDaNuComponent', () => {
  let component: BongDaNuComponent;
  let fixture: ComponentFixture<BongDaNuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BongDaNuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BongDaNuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
