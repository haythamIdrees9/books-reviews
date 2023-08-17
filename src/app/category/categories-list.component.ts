import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { CategoryBooks, bookModel } from '../models/book';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  loadingBooks = [{ title: "nonfiction", items: Array(9).fill(0)},
                  { title: "fiction", items: Array(9).fill(0)},{ title: "children`s", items: Array(9).fill(0)},{ title: "self-improvement", items: Array(9).fill(0)}]
  booksLists:Array<CategoryBooks> = [];
  
  constructor(private bookService:BookService){

  }

  ngOnInit(): void {
    this.bookService.getCategoriesBooks().subscribe((categories:{[title:string]:Array<bookModel>})=>{
      
      for (const key in categories) {
        this.booksLists.push({title:key,items:categories[key]});
      }
      const categoryOrder = ['nonfiction', 'fiction', 'children`s', 'self-improvement'];
      this.booksLists.sort((categoryA, categoryB) => {
        const indexA = categoryOrder.indexOf(categoryA.title);
        const indexB = categoryOrder.indexOf(categoryB.title);
        return indexA - indexB;
      });
      
    })
  }


}
