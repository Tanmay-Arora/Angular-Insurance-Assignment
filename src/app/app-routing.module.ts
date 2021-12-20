import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPolicyDetailsComponent } from './add-policy-details/add-policy-details.component';
import { DeletePolicyDataComponent } from './delete-policy-data/delete-policy-data.component';
import { PolicyListComponent } from './policy-list/policy-list.component';
import { UpdatePolicyDetailsComponent } from './update-policy-details/update-policy-details.component';

const routes: Routes = [
  { path: '' , redirectTo: '/policyList', pathMatch: 'full'},
  { path: 'policyList', component: PolicyListComponent},
  { path: 'addRecords', component: AddPolicyDetailsComponent},
  { path: 'updateRecords/:id/:polNo/:name/:polAmt/:emiAmt/:nomName', component: UpdatePolicyDetailsComponent},
  { path: 'deleteRecords/:id', component: DeletePolicyDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PolicyListComponent, AddPolicyDetailsComponent, UpdatePolicyDetailsComponent, DeletePolicyDataComponent];
