import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { HeaderNavbarComponent } from './modules/home/components/header-navbar/header-navbar.component';
import { Section8FooterComponent } from './modules/home/components/section8-footer/section8-footer.component';
import { JobsModule } from './modules/jobs/jobs.module';
import { JobDetailsModule } from './modules/job-details/job-details.module';
import { JobDetailsRoutingModule } from './modules/job-details/job-details-routing.module';
import { JobsRoutingModule } from './modules/jobs/jobs-routing.module';
import { BlogGridModule } from './modules/blog-grid/blog-grid.module';
import { BlogGridRoutingModule } from './modules/blog-grid/blog-grid-routing.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NotFoundPageComponent } from './global-components/not-found-page/not-found-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    Section8FooterComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    JobsRoutingModule,
    JobDetailsRoutingModule,
    JobsModule,
    JobDetailsModule,
    BlogGridModule,
    BlogGridRoutingModule,
    LazyLoadImageModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
