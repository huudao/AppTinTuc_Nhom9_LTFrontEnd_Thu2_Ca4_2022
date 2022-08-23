import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BongDaSpainComponent } from './bong-da-spain.component';

describe('BongDaSpainComponent', () => {
  let component: BongDaSpainComponent;
  let fixture: ComponentFixture<BongDaSpainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BongDaSpainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BongDaSpainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
