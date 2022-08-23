import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangNhatComponent } from './hang-nhat.component';

describe('HangNhatComponent', () => {
  let component: HangNhatComponent;
  let fixture: ComponentFixture<HangNhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangNhatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HangNhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
