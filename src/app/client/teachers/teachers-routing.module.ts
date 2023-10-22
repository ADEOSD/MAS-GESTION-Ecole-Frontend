import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersComponent } from './teachers.component';
import { ListEnseignantsComponent } from './list-enseignants/list-enseignants.component';

const routes: Routes = [{ path: '', component: TeachersComponent,
children:[
  {
    path:'list-enseignants', component:ListEnseignantsComponent
  }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
