import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { AlljobsComponent } from './alljobs/alljobs.component';
import { AddjobComponent } from './addjob/addjob.component';
import { EditjobComponent } from './editjob/editjob.component';
import { SinglejobComponent } from './singlejob/singlejob.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './jobPipes/search.pipe';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    JobsComponent,
    AlljobsComponent,
    AddjobComponent,
    EditjobComponent,
    SinglejobComponent,
    DashboardComponent,
    SearchPipe,
    AdminEditComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class JobsModule { }
