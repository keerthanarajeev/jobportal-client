import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JobsComponent } from './jobs/jobs.component';
import { DashboardComponent } from './jobs/dashboard/dashboard.component';
import { AlljobsComponent } from './jobs/alljobs/alljobs.component';
import { AddjobComponent } from './jobs/addjob/addjob.component';
import { EditjobComponent } from './jobs/editjob/editjob.component';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { SingleviewComponent } from './singleview/singleview.component';


const routes: Routes = 

[
  { path: 'jobs', loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule) },

  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'

  },
  {
    path:'home',
    component:HomeComponent
  },

  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'singleview/:id',
    component:SingleviewComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
