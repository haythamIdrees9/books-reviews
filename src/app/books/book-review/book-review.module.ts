import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookReviewComponent } from './book-review.component';
import { RouterModule } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { CardComponent } from 'src/app/UI/card/card.component';
import { LoadingSkeletonComponent } from 'src/app/UI/loading-skeleton/loading-skeleton.component';
import { RatingComponent } from 'src/app/UI/rating/rating.component';
import { ToastComponent } from 'src/app/UI/toast/toast.component';

@NgModule({
  declarations:[BookReviewComponent],
  imports: [
    CommonModule,
    CardComponent,
    LoadingSkeletonComponent,
    RatingComponent,
    ToastComponent,
    RouterModule.forChild([{path:'',component:BookReviewComponent}])
  ],
  providers:[BookService]
})
export class BookReviewModule {}