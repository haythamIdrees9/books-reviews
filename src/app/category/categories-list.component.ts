import { Component, OnInit } from '@angular/core';
import { BookService, categoriesResponse } from '../services/book.service';
import { CategoryBooks, bookModel } from '../models/book';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  loadingBooks = [{ title: "nonfiction", items: Array(9).fill(0),background:'#F6F6F6',theme:'light'},
                  { title: "fiction", items: Array(9).fill(0),background:'url("assets/images/moon.png")',theme:'dark'},
                  { title: "children`s", items: Array(9).fill(0),background:'#F6F6F6',theme:'light'},
                  { title: "self-improvement", items: Array(9).fill(0),background:'url("assets/images/cloud.jpg")',theme:'dark'}
                ]
  booksLists:Array<CategoryBooks> = [];
  
  constructor(private bookService:BookService){

  }

  ngOnInit(): void {
    this.bookService.getCategoriesBooks().subscribe((categories:categoriesResponse)=>{
      
      for (const key in categories) {
        const {background,theme} = categories[key].metaData;
        this.booksLists.push({title:key,items:categories[key].items,background,theme});
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
