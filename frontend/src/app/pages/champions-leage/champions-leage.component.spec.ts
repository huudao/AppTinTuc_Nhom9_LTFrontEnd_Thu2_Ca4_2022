import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsLeageComponent } from './champions-leage.component';

describe('ChampionsLeageComponent', () => {
  let component: ChampionsLeageComponent;
  let fixture: ComponentFixture<ChampionsLeageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionsLeageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionsLeageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
