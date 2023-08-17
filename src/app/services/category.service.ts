import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { firebaseKey } from '../app.component';

export type category = {
  title: string
  description: string, 
  image: string,
}
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) {
  }

  getCategories():Observable<Object>{
    const URL = `${firebaseKey}/categories.json`
    return this.http.get(URL).pipe(retry(3));
  }

  getMostPopularCategories():Observable<Array<category>>{
    const URL = `${firebaseKey}/most-popular-category.json`
    return this.http.get<Array<category>>(URL).pipe(retry(3));
  }
}
