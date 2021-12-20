import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePolicyDataComponent } from './delete-policy-data.component';

describe('DeletePolicyDataComponent', () => {
  let component: DeletePolicyDataComponent;
  let fixture: ComponentFixture<DeletePolicyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePolicyDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePolicyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
