import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Policy } from '../Policy';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit{
  
  insuranceData:any = [];

  constructor(private _apiService: ApiService, private router: Router){
    this._apiService.getInsuranceData().pipe(map((data) =>{
      console.log(data);
      this.insuranceData = data
    } ));
  }

  onSelectUpdate(data:any){
    this.router.navigate(['/updateRecords', data.id, data.policyNo, data.policyHolderName, data.policyAmt, data.emiAmount, data.nomineeName])
  }

  onSelectDelete(data:any) {
    this.router.navigate(['/deleteRecords', data.id]);
  }

  ngOnInit(){
    this._apiService.getInsuranceData().pipe(map(res => this.insuranceData = res));
    console.log(this.insuranceData);
  }

}

