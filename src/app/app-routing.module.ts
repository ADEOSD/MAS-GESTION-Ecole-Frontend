import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './utility/app.guard';

const routes: Routes = [{ path: '', loadChildren: () => import('./client/client.module').then(m => m.ClientModule)}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
