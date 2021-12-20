
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Policy } from '../Policy';

@Component({
  selector: 'app-delete-policy-data',
  templateUrl: './delete-policy-data.component.html',
  styleUrls: ['./delete-policy-data.component.css']
})
export class DeletePolicyDataComponent implements OnInit {

  recordId!:number;
  policyData!:Policy;



  constructor(private _apiService: ApiService, private router:Router ,private route:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.recordId = id !== null ? parseInt(id) : 0;
    this.getPolicyData();
  }

  deletePolicy(){
    this._apiService.deleteInsuranceData(this.recordId).subscribe(
      response => console.log('Success', response),
      error => console.log('Error', error)
    )
    this.router.navigate(['policyList']);
  }

  getPolicyData(){
    this._apiService.getInsPolicyData(this.recordId).subscribe(data => this.policyData = data) 
  }

}

