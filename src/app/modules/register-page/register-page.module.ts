import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterPageRoutingModule } from './register-page-routing.module';
import { RegisterPageComponent } from './register-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegisterPageRoutingModule,
    HttpClientModule,
  ],
})
export class RegisterPageModule {}
