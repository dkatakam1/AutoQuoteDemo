import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleBackgroundComponent } from './add-vehicle-background.component';

describe('AddVehicleBackgroundComponent', () => {
  let component: AddVehicleBackgroundComponent;
  let fixture: ComponentFixture<AddVehicleBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVehicleBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVehicleBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
