import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'jobs',
    loadChildren: () =>
      import('../app/modules/jobs/jobs.module').then((m) => m.JobsModule),
  },
  {
    path: 'job-details',
    loadChildren: () =>
      import('../app/modules/job-details/job-details.module').then(
        (m) => m.JobDetailsModule
      ),
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
