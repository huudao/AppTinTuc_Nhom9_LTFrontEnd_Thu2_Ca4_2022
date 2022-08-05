import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ClubComponent } from './pages/club/club.component';
import { HeaderComponent } from './sharepage/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ClubComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
