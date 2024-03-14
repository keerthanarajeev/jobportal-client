import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './jobs.component';
import { AlljobsComponent } from './alljobs/alljobs.component';
import { AddjobComponent } from './addjob/addjob.component';
import { EditjobComponent } from './editjob/editjob.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { SinglejobComponent } from './singlejob/singlejob.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'

  },
  
  { path: 'dashboard', component: DashboardComponent},
{path:'all-jobs', component:AlljobsComponent},
{path:'add-jobs', component:AddjobComponent},
{path:'edit-jobs/:id', component:EditjobComponent},
{path:'single-jobs/:id', component:SinglejobComponent},

{path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
