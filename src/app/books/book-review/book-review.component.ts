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
  constructor(private route: ActivatedRoute, private bookService: BookService) {

  }

  ngOnInit(): void {
    const { id } = this.route.snapshot.params;
    if (id) {
      this.getBook(id)
    } else {
      this.notFound = true;
    }
    console.log('this.route.snapshot.params', this.route.snapshot.params);
  }

  getBook(id: number) {
    // return;
    this.bookService.getBook(id)
    .subscribe({
        next: (book: BookModel) => {
          
          console.log('book', book);
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
}
