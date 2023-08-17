import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { firebaseKey } from '../app.component';
import {  bookModel } from '../models/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  
  constructor(private http: HttpClient) {
  }

    getCategoriesBooks():Observable<{[title:string]:Array<bookModel>}>{
    const URL = `${firebaseKey}/dashboard-categories.json`
    return this.http.get<{[title:string]:Array<bookModel>}>(URL).pipe(retry(3));
  }

}
