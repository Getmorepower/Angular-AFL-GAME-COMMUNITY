import { ComponentFixture, TestBed } from '@angular/core/testing';

import { gameinfocomponent } from './gameinfo.component';

describe('TeamResultComponent', () => {
  let component: gameinfocomponent;
  let fixture: ComponentFixture<gameinfocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ gameinfocomponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(gameinfocomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
