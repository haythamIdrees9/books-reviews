import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { firebaseKey } from '../app.component';
import { BookModel, CategoryBookModel } from '../models/book';



@Injectable()
export class BookService {

  constructor(private http: HttpClient) {
  }

  getBook(bookId:number): Observable<BookModel> {
    const URL = `${firebaseKey}/books/book${bookId}.json`
    return this.http.get<BookModel>(URL).pipe(retry(3));
  }

}
