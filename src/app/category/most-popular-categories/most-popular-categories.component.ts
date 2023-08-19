import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService, category } from 'src/app/services/category.service';

@Component({
  selector: 'app-most-popular-categories',
  templateUrl: './most-popular-categories.component.html',
  styleUrls: ['./most-popular-categories.component.scss']
})


export class MostPopularCategoriesComponent implements OnInit, OnDestroy {
  categories:Array<category> = [];
  loadingCategories:Array<boolean> = Array(8).fill(true);
  streamSubscription = new Subscription();
  constructor(private categoryService: CategoryService) {

  }

  ngOnInit(): void {
    this.streamSubscription = this.categoryService.getMostPopularCategories().subscribe((categories:Array<category>) => {
      this.categories = categories;
    })
  }

  ngOnDestroy(): void {
    this.streamSubscription.unsubscribe()
  }
}
