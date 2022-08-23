import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaiTreComponent } from './giai-tre.component';

describe('GiaiTreComponent', () => {
  let component: GiaiTreComponent;
  let fixture: ComponentFixture<GiaiTreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiaiTreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiaiTreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
