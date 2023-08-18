import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'category', loadChildren: () => import('./category/categories-list.module').then(m => m.CategoryModule)},
  {path:'books/:id', loadChildren: () => import('./books/book-review/book-review.module').then(m => m.BookReviewModule)},
  {path:'**',redirectTo: '/category' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled',preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
