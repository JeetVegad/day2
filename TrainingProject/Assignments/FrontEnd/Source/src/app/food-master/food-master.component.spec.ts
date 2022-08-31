import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMasterComponent } from './food-master.component';

describe('FoodMasterComponent', () => {
  let component: FoodMasterComponent;
  let fixture: ComponentFixture<FoodMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
