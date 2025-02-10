import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProfileProgressComponent } from './components/profile-progress/profile-progress.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
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
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileProgressComponent,
    ProfileComponent,
    JobOfferComponent,
    ContractsComponent,
    HealthDeclerationComponent,
    VisaComponent,
    ResumeComponent,
    JobAlertComponent,
    SavedJobsComponent,
    SettingsComponent,
    DashboardComponent1,
    NotFoundComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, LazyLoadImageModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
