import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StagesComponent } from './stages.component';
import { ListstagesComponent } from './liststages/liststages.component';

const routes: Routes = [{ path: '', component: StagesComponent ,children:[
  {path:'lists',component:ListstagesComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StagesRoutingModule { }
