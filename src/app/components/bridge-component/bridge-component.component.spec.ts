import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeComponentComponent } from './bridge-component.component';

describe('BridgeComponentComponent', () => {
  let component: BridgeComponentComponent;
  let fixture: ComponentFixture<BridgeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridgeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
