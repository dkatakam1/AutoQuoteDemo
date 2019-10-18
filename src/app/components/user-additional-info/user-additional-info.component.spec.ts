import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdditionalInfoComponent } from './user-additional-info.component';

describe('UserAdditionalInfoComponent', () => {
  let component: UserAdditionalInfoComponent;
  let fixture: ComponentFixture<UserAdditionalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAdditionalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdditionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
