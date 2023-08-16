import { Component, OnInit } from '@angular/core';
import { CategoryService, category } from 'src/app/services/category.service';

@Component({
  selector: 'app-most-popular-categories',
  templateUrl: './most-popular-categories.component.html',
  styleUrls: ['./most-popular-categories.component.scss']
})


export class MostPopularCategoriesComponent implements OnInit {
  categories:Array<category> = [];
  constructor(private categoryService: CategoryService) {

  }
  ngOnInit(): void {
    this.categoryService.getMostPopularCategories().subscribe((categories:Array<category>) => {
      this.categories = categories;
    })
  }
}
