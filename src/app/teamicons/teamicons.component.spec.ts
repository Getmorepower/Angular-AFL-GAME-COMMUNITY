import { ComponentFixture, TestBed } from '@angular/core/testing';

import { teamiconscomponent } from './teamicons.component';

describe('teamiconscomponent', () => {
  let component: teamiconscomponent;
  let fixture: ComponentFixture<teamiconscomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ teamiconscomponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(teamiconscomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
