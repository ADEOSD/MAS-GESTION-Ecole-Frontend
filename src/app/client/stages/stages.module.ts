import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StagesRoutingModule } from './stages-routing.module';
import { StagesComponent } from './stages.component';
import { ListstagesComponent } from './liststages/liststages.component';


@NgModule({
  declarations: [
    StagesComponent,
    ListstagesComponent
  ],
  imports: [
    CommonModule,
    StagesRoutingModule
  ]
})
export class StagesModule { }
