import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleLookupComponent } from './add-vehicle-lookup.component';

describe('AddVehicleLookupComponent', () => {
  let component: AddVehicleLookupComponent;
  let fixture: ComponentFixture<AddVehicleLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVehicleLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVehicleLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
