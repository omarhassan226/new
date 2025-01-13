import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobDetailsRoutingModule } from './job-details-routing.module';
import { JobDetailsComponent } from './job-details.component';
import { LeftSectionComponent } from './components/left-section/left-section.component';
import { RightSectionComponent } from './components/right-section/right-section.component';

@NgModule({
  declarations: [JobDetailsComponent, LeftSectionComponent, RightSectionComponent],
  imports: [CommonModule, JobDetailsRoutingModule],
})
export class JobDetailsModule {}
