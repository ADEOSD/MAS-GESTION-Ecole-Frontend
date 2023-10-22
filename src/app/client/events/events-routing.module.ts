import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { ListeventsComponent } from './listevents/listevents.component';

const routes: Routes = [{ path: '', component: EventsComponent ,children:[
  {path:'lists',component:ListeventsComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
