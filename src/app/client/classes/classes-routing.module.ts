import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classes.component';
import { ListClassesComponent } from './list-classes/list-classes.component';

const routes: Routes = [{ path: '', component: ClassesComponent,children:[
  {path:'listclasses',component:ListClassesComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
