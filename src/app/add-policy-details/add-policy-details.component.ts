import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Policy } from '../Policy';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-policy-details',
  templateUrl: './add-policy-details.component.html',
  styleUrls: ['./add-policy-details.component.css']
})
export class AddPolicyDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder, private _apiService: ApiService, private router:Router) { }

  newPolicyForm!: FormGroup;

  
  newPolicyId!:number;
  

  ngOnInit(): void {
    this.newPolicyForm = this.fb.group({
      id: [],
      policyNo: [''],
      policyHolderName: [''],
      policyAmt: [''],
      emiAmount: [''],
      nomineeName: ['']
    })
  }

  addPolicy(){
    console.warn(this.newPolicyForm)
    this._apiService.addInsuranceData(this.newPolicyForm.value).subscribe(
      response => console.log('Success', response),
      error => console.log('Error', error)
    )
    this.router.navigate(['policyList']);
  }

}
