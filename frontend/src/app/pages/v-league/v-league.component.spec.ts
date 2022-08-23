import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VLeagueComponent } from './v-league.component';

describe('VLeagueComponent', () => {
  let component: VLeagueComponent;
  let fixture: ComponentFixture<VLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VLeagueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
