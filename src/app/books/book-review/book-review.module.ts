import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookReviewComponent } from './book-review.component';
import { RouterModule } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { CardComponent } from 'src/app/UI/card/card.component';
import { LoadingSkeletonComponent } from 'src/app/UI/loading-skeleton/loading-skeleton.component';

@NgModule({
  declarations:[BookReviewComponent],
  imports: [
    CommonModule,
    CardComponent,
    LoadingSkeletonComponent,
    RouterModule.forChild([{path:'',component:BookReviewComponent}])
  ],
  providers:[BookService]
})
export class BookReviewModule {}