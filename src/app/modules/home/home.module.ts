import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { Section1LandingComponent } from './components/section1-landing/section1-landing.component';
import { Section2CardsComponent } from './components/section2-cards/section2-cards.component';
// import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
import { Section3CompaniesComponent } from './components/section3-companies/section3-companies.component';
import { Section4JobsCategoryComponent } from './components/section4-jobs-category/section4-jobs-category.component';
import { Section5JobPostsComponent } from './components/section5-job-posts/section5-job-posts.component';
import { Section6UsersReviewComponent } from './components/section6-users-review/section6-users-review.component';
import { Section7FooterActionComponent } from './components/section7-footer-action/section7-footer-action.component';
// import { Section8FooterComponent } from './components/section8-footer/section8-footer.component';
import { SvgsComponent } from './components/section1-landing/components/svgs/svgs.component';
import { LeftSectionComponent } from './components/section1-landing/components/left-section/left-section.component';
import { RightSectionComponent } from './components/section1-landing/components/right-section/right-section.component';
import { HeaderComponent } from './components/globals/header/header.component';
import { WorkProccessCrdComponent } from './components/section2-cards/components/work-proccess-crd/work-proccess-crd.component';
import { JobsCardComponent } from './components/section5-job-posts/components/jobs-card/jobs-card.component';
import { UserReviewCardComponent } from './components/section6-users-review/components/user-review-card/user-review-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    Section1LandingComponent,
    Section2CardsComponent,
    // HeaderNavbarComponent,
    Section3CompaniesComponent,
    Section4JobsCategoryComponent,
    Section5JobPostsComponent,
    Section6UsersReviewComponent,
    Section7FooterActionComponent,
    // Section8FooterComponent,
    SvgsComponent,
    LeftSectionComponent,
    RightSectionComponent,
    HeaderComponent,
    WorkProccessCrdComponent,
    JobsCardComponent,
    UserReviewCardComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
