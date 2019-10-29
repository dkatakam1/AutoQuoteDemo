import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleOverlayComponent } from './add-vehicle-overlay.component';

describe('AddVehicleOverlayComponent', () => {
  let component: AddVehicleOverlayComponent;
  let fixture: ComponentFixture<AddVehicleOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVehicleOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVehicleOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
