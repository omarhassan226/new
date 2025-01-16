import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { JobOfferComponent } from './pages/job-offer/job-offer.component';
import { ContractsComponent } from './pages/contracts/contracts.component';
import { HealthDeclerationComponent } from './pages/health-decleration/health-decleration.component';
import { VisaComponent } from './pages/visa/visa.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { JobAlertComponent } from './pages/job-alert/job-alert.component';
import { SavedJobsComponent } from './pages/saved-jobs/saved-jobs.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { DashboardComponent1 } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'candidate-dashboard-index',
        component: DashboardComponent1,
      },
      {
        path: 'candidate-dashboard-profile',
        component: ProfileComponent,
      },
      {
        path: 'candidate-dashboard-job-offer',
        component: JobOfferComponent,
      },
      {
        path: 'candidate-dashboard-contract-details',
        component: ContractsComponent,
      },
      {
        path: 'candidate-dashboard-health-declaration',
        component: HealthDeclerationComponent,
      },
      {
        path: 'candidate-dashboard-visa',
        component: VisaComponent,
      },
      {
        path: 'candidate-dashboard-resume',
        component: ResumeComponent,
      },
      {
        path: 'candidate-dashboard-job-alert',
        component: JobAlertComponent,
      },
      {
        path: 'candidate-dashboard-saved-jobs',
        component: SavedJobsComponent,
      },
      {
        path: 'candidate-dashboard-settings',
        component: SettingsComponent,
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
  // { path: 'dashboard/candidate-dashboard-profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
