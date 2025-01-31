import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { RedSectionComponent } from './components/red-section/red-section.component';
import { FindJobCardComponent } from './components/find-job-card/find-job-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [JobsComponent, RedSectionComponent, FindJobCardComponent, PaginationComponent],
  imports: [CommonModule, JobsRoutingModule],
})
export class JobsModule {}
