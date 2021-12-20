import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Policy } from './Policy';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = 'http://localhost:3000/insurance';

  constructor(private http: HttpClient) { }

  getInsuranceData(): Observable<Policy[]>
  {
    return this.http.get<Policy[]>(this.url);
   }

   addInsuranceData(data:any)
  {
    return this.http.post<any>(this.url,data).pipe(map((res:any)=>{
    return res;
    }))
  }

  updateInsuranceData(data :any,id:number)
  {
    let enhancedURL = `${this.url}/${id}`;
    return this.http.put<any>(enhancedURL,data).pipe(map((res:any)=>{
    return res;
    }))
  }

  deleteInsuranceData(id:number)
  {
    let enhancedURL = `${this.url}/${id}`;
    console.log(enhancedURL);
    return this.http.delete<any>(enhancedURL).pipe(map((res:any)=>{
    return res;
    }))
  }

  getInsPolicyData(id:number){
    let enhancedURL = `${this.url}/${id}`;
    console.log(enhancedURL);
    return this.http.get<any>(enhancedURL).pipe(map((res:any) => {
      return res;
    }))
  }


}
