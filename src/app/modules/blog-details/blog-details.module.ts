import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDetailsRoutingModule } from './blog-details-routing.module';
import { BlogDetailsComponent } from './blog-details.component';
import { CommentsComponent } from './components/left-section/comments/comments.component';
import { LeaveCommentComponent } from './components/left-section/leave-comment/leave-comment.component';
import { BlogDetailsCardComponent } from './components/left-section/blog-details-card/blog-details-card.component';
import { TopLeftSectionComponent } from './components/left-section/top-left-section/top-left-section.component';
import { SearchComponent } from './components/right-section/search/search.component';
import { CategoriesComponent } from './components/right-section/categories/categories.component';
import { RecentPostsComponent } from './components/right-section/recent-posts/recent-posts.component';
import { PopularTagsComponent } from './components/right-section/popular-tags/popular-tags.component';

@NgModule({
  declarations: [
    BlogDetailsComponent,
    CommentsComponent,
    LeaveCommentComponent,
    BlogDetailsCardComponent,
    TopLeftSectionComponent,
    SearchComponent,
    CategoriesComponent,
    RecentPostsComponent,
    PopularTagsComponent,
  ],
  imports: [CommonModule, BlogDetailsRoutingModule],
})
export class BlogDetailsModule {}
