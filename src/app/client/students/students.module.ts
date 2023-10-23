import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { ListEtudiantsComponent } from './list-etudiants/list-etudiants.component';


@NgModule({
  declarations: [
    StudentsComponent,
    ListEtudiantsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
