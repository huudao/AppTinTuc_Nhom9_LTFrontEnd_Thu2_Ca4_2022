import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { NewDetailsComponent } from './pages/new-details/new-details.component';
import { LoginComponent } from './pages/login/login.component';
import { ItalyComponent } from './pages/italy/italy.component';
import { TinMoiNhatComponent } from './pages/tin-moi-nhat/tin-moi-nhat.component';
import { TinChuyenNhuongComponent } from './pages/tin-chuyen-nhuong/tin-chuyen-nhuong.component';
import { BongDaAnhComponent } from './pages/bong-da-anh/bong-da-anh.component';
import { BongDaSpainComponent } from './pages/bong-da-spain/bong-da-spain.component';
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
import { BongDaPhapComponent } from './pages/bong-da-phap/bong-da-phap.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'News', component: NewsComponent},
  {path: 'detail/:link', component: NewDetailsComponent},
  {path: 'NewsDetails', component: NewDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'NewsDetails', component: NewDetailsComponent},
  {path: 'italy', component: ItalyComponent},
  {path: 'tinmoi', component: TinMoiNhatComponent},
  {path: 'tinchuyennhuong', component: TinChuyenNhuongComponent},
  {path: 'anh', component: BongDaAnhComponent},
  {path: 'taybannha', component: BongDaSpainComponent},
  {path: 'championsleague', component: ChampionsLeageComponent},
  {path: 'vietnam', component: VietNamComponent},
  {path: 'cacdoituyenquocgia', component: ClubsVietNamComponent},
  {path: 'vleague', component: VLeagueComponent},
  {path: 'cupquocgia', component: CupQuocGiaComponent},
  {path: 'hangnhat', component: HangNhatComponent},
  {path: 'giaitre', component: GiaiTreComponent},
  {path: 'bongdanu', component: BongDaNuComponent},
  {path: 'vff', component: VffComponent},
  {path: 'hautruong', component: HauTruongComponent},
  {path: 'video', component: VideoComponent},
  {path: 'duc', component: BongDaSpainComponent},
  {path: 'phap', component: BongDaPhapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
