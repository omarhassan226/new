import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { FormSectionComponent } from './components/form-section/form-section.component';
import { HomeModule } from '../home/home.module';
import { WidgetAboutComponent } from './components/widget-about/widget-about.component';


@NgModule({
  declarations: [
    ContactUsComponent,
    GetInTouchComponent,
    FormSectionComponent,
    WidgetAboutComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    HomeModule
  ]
})
export class ContactUsModule { }
