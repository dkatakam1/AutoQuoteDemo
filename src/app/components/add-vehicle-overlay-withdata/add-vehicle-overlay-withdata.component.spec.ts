import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleOverlayWithdataComponent } from './add-vehicle-overlay-withdata.component';

describe('AddVehicleOverlayWithdataComponent', () => {
  let component: AddVehicleOverlayWithdataComponent;
  let fixture: ComponentFixture<AddVehicleOverlayWithdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVehicleOverlayWithdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVehicleOverlayWithdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
