import { Component, Input } from '@angular/core';
import { CategoryBookModel } from 'src/app/models/book';

@Component({
  selector: 'app-category-books[title][items][background][theme]',
  templateUrl: './category-books.component.html',
  styleUrls: ['./category-books.component.scss']
})
export class CategoryBooksComponent {
  @Input('title') title!:string; 
  @Input('items') items!:CategoryBookModel[];
  @Input('background') background!:string;
  @Input('theme') theme!:string;
  @Input('loading') loading!:boolean;
  
}
