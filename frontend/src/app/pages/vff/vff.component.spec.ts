import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VffComponent } from './vff.component';

describe('VffComponent', () => {
  let component: VffComponent;
  let fixture: ComponentFixture<VffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
