import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookModel } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.scss']
})
export class BookReviewComponent implements OnInit {
  notFound: boolean = false;
  book!:BookModel;
  ratingFeedback = {
    positive: "Thanks for the positive feedback! Encourages better reads.",
    natural: "Your thoughts matter! Your feedback helps improve the reading experience.",
    negative: "Sorry the book didn't meet expectations. Your input guides us."
  };
  feedbackText:string = '';
  feedbackTimeout:number = 6000;
  constructor(private route: ActivatedRoute, private bookService: BookService) {

  }

  ngOnInit(): void {
    const { id } = this.route.snapshot.params;
    if (id) {
      this.getBook(id)
    } else {
      this.notFound = true;
    }
  }

  getBook(id: number) {
    this.bookService.getBook(id)
    .subscribe({
        next: (book: BookModel) => {
          if(!book){
            this.notFound = true;
            return;
          }
          this.book = book;
        }, error: (error) => {
          console.error(error);
          this.notFound = true;
        }
      })
  }

  onRate(value:number){
    if(value > 3.5){
      this.feedbackText = this.ratingFeedback.positive
    } else if (value > 2){
      this.feedbackText = this.ratingFeedback.natural;
    } else {
      this.feedbackText = this.ratingFeedback.negative;
    }

    setTimeout(()=>{
      this.feedbackText = '';
    },this.feedbackTimeout)
  }
}
