import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooditemadminComponent } from './fooditemadmin.component';

describe('FooditemadminComponent', () => {
  let component: FooditemadminComponent;
  let fixture: ComponentFixture<FooditemadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooditemadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooditemadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
