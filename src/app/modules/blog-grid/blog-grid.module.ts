import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogGridRoutingModule } from './blog-grid-routing.module';
import { BlogGridComponent } from './blog-grid.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogPaginationComponent } from './components/blog-pagination/blog-pagination.component';
import { RightSectionComponent } from './components/right-section/right-section.component';


@NgModule({
  declarations: [
    BlogGridComponent,
    BlogCardComponent,
    BlogPaginationComponent,
    RightSectionComponent
  ],
  imports: [
    CommonModule,
    BlogGridRoutingModule
  ]
})
export class BlogGridModule { }
