import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { ListEtudiantsComponent } from './list-etudiants/list-etudiants.component';

const routes: Routes = [{ path: '', component: StudentsComponent ,children:[
  {path:'lists',component:ListEtudiantsComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
