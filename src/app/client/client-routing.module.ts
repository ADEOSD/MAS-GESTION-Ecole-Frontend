import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: '', component: ClientComponent ,children:[
  {path:'',component:HomeComponentComponent},
  {path:'login', component:LoginComponent}

]
},
  { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },
  { path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) },
  { path: 'teachers', loadChildren: () => import('./teachers/teachers.module').then(m => m.TeachersModule) },
  { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },
  { path: 'classes', loadChildren: () => import('./classes/classes.module').then(m => m.ClassesModule) },
  { path: 'stages', loadChildren: () => import('./stages/stages.module').then(m => m.StagesModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
