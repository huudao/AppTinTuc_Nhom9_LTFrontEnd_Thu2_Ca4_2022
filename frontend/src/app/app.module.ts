import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { ListNewsSearchComponent } from './pages/list-news-search/list-news-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from "ngx-pagination";
import { BoxNewsHomeComponent } from './sharepages/box-news-home/box-news-home.component';
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
import { FormsModule } from '@angular/forms';
import { TinMoiNhatComponent } from './pages/tin-moi-nhat/tin-moi-nhat.component';
import { TinChuyenNhuongComponent } from './pages/tin-chuyen-nhuong/tin-chuyen-nhuong.component';
import { BongDaAnhComponent } from './pages/bong-da-anh/bong-da-anh.component';
import { BongDaSpainComponent } from './pages/bong-da-spain/bong-da-spain.component';
import { BongDaPhapComponent } from './pages/bong-da-phap/bong-da-phap.component';
import { ChampionsLeageComponent } from './pages/champions-leage/champions-leage.component';
import { VietNamComponent } from './pages/viet-nam/viet-nam.component';
import { ClubsVietNamComponent } from './pages/clubs-viet-nam/clubs-viet-nam.component';
import { VLeagueComponent } from './pages/v-league/v-league.component';
import { CupQuocGiaComponent } from './pages/cup-quoc-gia/cup-quoc-gia.component';
import { HangNhatComponent } from './pages/hang-nhat/hang-nhat.component';
import { GiaiTreComponent } from './pages/giai-tre/giai-tre.component';
import { BongDaNuComponent } from './pages/bong-da-nu/bong-da-nu.component';
import { VffComponent } from './pages/vff/vff.component';
import { HauTruongComponent } from './pages/hau-truong/hau-truong.component';
import { VideoComponent } from './pages/video/video.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NewsComponent,
    NewDetailsComponent,
    HomeComponent,
    BoxNewsHomeComponent,
    HomeComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    LeftMenuComponent,
    RightMenuComponent,
    ItalyComponent,
    TinMoiNhatComponent,
    TinChuyenNhuongComponent,
    BongDaAnhComponent,
    BongDaSpainComponent,
    BongDaPhapComponent,
    ChampionsLeageComponent,
    VietNamComponent,
    ClubsVietNamComponent,
    VLeagueComponent,
    CupQuocGiaComponent,
    HangNhatComponent,
    GiaiTreComponent,
    BongDaNuComponent,
    VffComponent,
    HauTruongComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
