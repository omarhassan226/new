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
  {
    path: 'register-page',
    loadChildren: () =>
      import('../app/modules/register-page/register-page.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'login-page',
    loadChildren: () =>
      import('../app/modules/login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: 'blog-grid',
    loadChildren: () =>
      import('../app/modules/blog-grid/blog-grid.module').then(
        (m) => m.BlogGridModule
      ),
  },
  {
    path: 'blog-details',
    loadChildren: () =>
      import('../app/modules/blog-details/blog-details.module').then(
        (m) => m.BlogDetailsModule
      ),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('../app/modules/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../app/modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
