import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDetailsComponent } from './job-details.component';

const routes: Routes = [{ path: ':id', component: JobDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobDetailsRoutingModule {}
