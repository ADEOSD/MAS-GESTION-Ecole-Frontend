import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { ListEnseignantsComponent } from './list-enseignants/list-enseignants.component';


@NgModule({
  declarations: [
    TeachersComponent,
    ListEnseignantsComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule
  ]
})
export class TeachersModule { }
