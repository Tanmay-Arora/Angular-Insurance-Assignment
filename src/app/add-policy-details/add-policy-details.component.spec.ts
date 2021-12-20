import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPolicyDetailsComponent } from './add-policy-details.component';

describe('AddPolicyDetailsComponent', () => {
  let component: AddPolicyDetailsComponent;
  let fixture: ComponentFixture<AddPolicyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPolicyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPolicyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
