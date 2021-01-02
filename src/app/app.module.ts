import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { MovieComponent } from './movie/movie.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
