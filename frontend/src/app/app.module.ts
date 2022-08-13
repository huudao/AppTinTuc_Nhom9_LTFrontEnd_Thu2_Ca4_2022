import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { FooterComponent } from './sharepages/footer/footer.component';
import { NewsComponent } from './news/news.component';
import { NewDetailsComponent } from './new-details/new-details.component';
=======
import { HomeComponent } from './pages/home/home.component';
>>>>>>> bd58ee11491cf5435854f37e5017d8c12c2ac4a8

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    FooterComponent,
    NewsComponent,
    NewDetailsComponent
=======
    HomeComponent
>>>>>>> bd58ee11491cf5435854f37e5017d8c12c2ac4a8
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
