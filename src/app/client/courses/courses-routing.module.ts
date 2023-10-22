import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { ListcoursComponent } from './listcours/listcours.component';

const routes: Routes = [{ path: '', component: CoursesComponent,children:[
  {path:'listcourse',component:ListcoursComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
