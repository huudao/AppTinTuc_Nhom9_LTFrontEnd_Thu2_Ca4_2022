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
import { TinchuyennhuongComponent } from './pages/tinchuyennhuong/tinchuyennhuong.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './sharepages/header/header.component';
import { LeftMenuComponent } from './sharepages/left-menu/left-menu.component';
import { RightMenuComponent } from './sharepages/right-menu/right-menu.component';
import { ItalyComponent } from './pages/italy/italy.component';
import {MdbTableModule} from 'mdb-angular-ui-kit/table';
import {MdbTabsModule} from 'mdb-angular-ui-kit/tabs';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthService,
  SocialAuthServiceConfig, SocialLoginModule
} from "@abacritt/angularx-social-login";
import {MdbCookiesManagementService} from 'mdb-angular-cookies-management';
import {MdbStorageManagementService} from 'mdb-angular-storage-management';
import {OAuthModule} from "angular-oauth2-oidc";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NewsComponent,
    NewDetailsComponent,
    HomeComponent,
    BoxNewsHomeComponent,
    HomeComponent,
    TinchuyennhuongComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    LeftMenuComponent,
    RightMenuComponent,
    ItalyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxPaginationModule,
    OAuthModule.forRoot(),
    MdbTabsModule,
    MdbFormsModule,
    SocialLoginModule
  ],
  providers: [ MdbCookiesManagementService, MdbStorageManagementService, {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("334644398802455")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("673998932925-t5a5tat8u3f03886mbqqi8tlhguul6eb.apps.googleusercontent.com")
        },
      ],
      onError:(err)=> {
        console.log(err)
      }
    } as SocialAuthServiceConfig
  }, SocialAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
