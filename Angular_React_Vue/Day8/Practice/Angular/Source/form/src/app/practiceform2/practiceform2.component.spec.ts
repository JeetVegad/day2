import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practiceform2Component } from './practiceform2.component';

describe('Practiceform2Component', () => {
  let component: Practiceform2Component;
  let fixture: ComponentFixture<Practiceform2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practiceform2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Practiceform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
