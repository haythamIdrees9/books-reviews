import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

export const firebaseKey = "https://fir-learning-1-71674-default-rtdb.firebaseio.com" 

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
}
