import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubStatusBarComponent } from './sub-status-bar.component';

describe('SubStatusBarComponent', () => {
  let component: SubStatusBarComponent;
  let fixture: ComponentFixture<SubStatusBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubStatusBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubStatusBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
