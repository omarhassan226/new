import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCvRoutingModule } from './create-cv-routing.module';
import { CreateCvComponent } from './create-cv.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    CreateCvComponent
  ],
  imports: [
    CommonModule,
    CreateCvRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
  ]
})
export class CreateCvModule { }
