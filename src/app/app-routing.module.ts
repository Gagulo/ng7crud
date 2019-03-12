import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetComponent } from './get/get.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  { path: 'business', component: GetComponent },
  { path: 'business/create', component: AddComponent },
  { path: 'business/edit/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
