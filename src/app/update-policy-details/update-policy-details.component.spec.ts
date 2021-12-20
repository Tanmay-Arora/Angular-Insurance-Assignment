import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePolicyDetailsComponent } from './update-policy-details.component';

describe('UpdatePolicyDetailsComponent', () => {
  let component: UpdatePolicyDetailsComponent;
  let fixture: ComponentFixture<UpdatePolicyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePolicyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePolicyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
