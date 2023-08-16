import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesListComponent } from './categories-list.component';
import { MostPopularCategoriesComponent } from './most-popular-categories/most-popular-categories.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CategoriesListComponent, MostPopularCategoriesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CategoriesListComponent },
      { path: ':id', component: CategoriesListComponent }]),
  ],
})
export class CategoryModule { }