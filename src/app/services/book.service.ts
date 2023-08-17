import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { firebaseKey } from '../app.component';
import { bookModel } from '../models/book';


export type categoriesResponse = { [title: string]: { items: Array<bookModel>, metaData: { [key: string]: string } } }

@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor(private http: HttpClient) {
  }

  getCategoriesBooks(): Observable<categoriesResponse> {
    const URL = `${firebaseKey}/dashboard-categories.json`
    return this.http.get<categoriesResponse>(URL).pipe(retry(3));
  }

}
