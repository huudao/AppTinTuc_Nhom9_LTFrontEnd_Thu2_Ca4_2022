import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './sharepages/footer/footer.component';
import { NewsComponent } from './pages/news/news.component';
import { NewDetailsComponent } from './pages/new-details/new-details.component';

import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from "ngx-pagination";
import { BoxNewsHomeComponent } from './sharepages/box-news-home/box-news-home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NewsComponent,
    NewDetailsComponent,
    HomeComponent,
    BoxNewsHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
