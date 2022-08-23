import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsVietNamComponent } from './clubs-viet-nam.component';

describe('ClubsVietNamComponent', () => {
  let component: ClubsVietNamComponent;
  let fixture: ComponentFixture<ClubsVietNamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubsVietNamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubsVietNamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
