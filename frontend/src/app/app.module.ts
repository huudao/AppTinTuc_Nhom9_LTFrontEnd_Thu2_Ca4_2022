import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './sharepages/footer/footer.component';
import { NewsComponent } from './pages/news/news.component';
import { NewDetailsComponent } from './pages/new-details/new-details.component';

import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './sharepages/header/header.component';
import { LeftMenuComponent } from './sharepages/left-menu/left-menu.component';
import { RightMenuComponent } from './sharepages/right-menu/right-menu.component';
import { ItalyComponent } from './pages/italy/italy.component';


@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    NewsComponent,
    NewDetailsComponent,

    HomeComponent,
      HeaderComponent,
      LeftMenuComponent,
      RightMenuComponent,
      ItalyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
