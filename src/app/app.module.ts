import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { SpotLightComponent } from './UI/spot-light/spot-light.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryModule } from './category/categories-list.module';
import { LoadingSkeletonComponent } from './UI/loading-skeleton/loading-skeleton.component';
import { BookReviewModule } from './books/book-review/book-review.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpotLightComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CategoryModule, // I use eager loading to avoid glitch on screen when reload, will be fixed after finish all requirement
    LoadingSkeletonComponent,
    BookReviewModule // I use eager loading to avoid glitch on screen when reload, will be fixed after finish all requirement
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
