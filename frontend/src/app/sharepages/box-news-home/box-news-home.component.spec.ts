import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxNewsHomeComponent } from './box-news-home.component';

describe('BoxNewsHomeComponent', () => {
  let component: BoxNewsHomeComponent;
  let fixture: ComponentFixture<BoxNewsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxNewsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxNewsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
