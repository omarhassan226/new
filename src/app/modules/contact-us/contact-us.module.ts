import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { FormSectionComponent } from './components/form-section/form-section.component';


@NgModule({
  declarations: [
    ContactUsComponent,
    GetInTouchComponent,
    FormSectionComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule
  ]
})
export class ContactUsModule { }
