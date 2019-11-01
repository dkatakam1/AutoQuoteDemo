import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesProvideDetailsComponent } from './vehicles-provide-details.component';

describe('VehiclesProvideDetailsComponent', () => {
  let component: VehiclesProvideDetailsComponent;
  let fixture: ComponentFixture<VehiclesProvideDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesProvideDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesProvideDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
