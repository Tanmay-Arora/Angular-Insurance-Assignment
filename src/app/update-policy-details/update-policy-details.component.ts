import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-policy-details',
  templateUrl: './update-policy-details.component.html',
  styleUrls: ['./update-policy-details.component.css']
})
export class UpdatePolicyDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder, private _apiService: ApiService, private router:Router, private route:ActivatedRoute) { }

  updatePolicyForm!: FormGroup;
  newPolicyId!:number;
  recordId!:number;

  ngOnInit(): void {
    
      let id = this.route.snapshot.paramMap.get('id');
      this.recordId = id !== null ? parseInt(id) : 0;

      let policyNo = this.route.snapshot.paramMap.get('polNo');
      let policyHolderName = this.route.snapshot.paramMap.get('name');
      let policyAmt = this.route.snapshot.paramMap.get('polAmt')
      let emiAmt = this.route.snapshot.paramMap.get('emiAmt')
      let nomName = this.route.snapshot.paramMap.get('nomName')



      this.updatePolicyForm = this.fb.group({ 
      id: [this.recordId],
      policyNo: [policyNo],
      policyHolderName: [policyHolderName],
      policyAmt: [policyAmt],
      emiAmount: [emiAmt],
      nomineeName: [nomName]
    })
  }

  updatePolicy(){
    console.warn(this.updatePolicyForm)
    this._apiService.updateInsuranceData(this.updatePolicyForm.value, this.recordId).subscribe(
      response => console.log('Success', response),
      error => console.log('Error', error)
    )
    this.router.navigate(['policyList']);
  }

}


