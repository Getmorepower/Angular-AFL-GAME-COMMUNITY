import { ComponentFixture, TestBed } from '@angular/core/testing';

import { selectedteamcomponent } from './selectedteam.component';

describe('selectedteamcomponent', () => {
  let component: selectedteamcomponent;
  let fixture: ComponentFixture<selectedteamcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ selectedteamcomponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(selectedteamcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
