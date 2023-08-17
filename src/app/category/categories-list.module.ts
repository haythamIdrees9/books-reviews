import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesListComponent } from './categories-list.component';
import { MostPopularCategoriesComponent } from './most-popular-categories/most-popular-categories.component';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../UI/carousel/carousel.component';
import { LoadingSkeletonComponent } from '../UI/loading-skeleton/loading-skeleton.component';

@NgModule({
  declarations: [CategoriesListComponent, MostPopularCategoriesComponent],
  imports: [
    CommonModule,
    CarouselComponent,
    LoadingSkeletonComponent,
    RouterModule.forChild([
      { path: '', component: CategoriesListComponent },
      { path: ':id', component: CategoriesListComponent }]),
  ],
})
export class CategoryModule { }