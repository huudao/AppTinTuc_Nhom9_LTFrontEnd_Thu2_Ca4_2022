import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { NewDetailsComponent } from './pages/new-details/new-details.component';
import { LoginComponent } from './pages/login/login.component';
import { ItalyComponent } from './pages/italy/italy.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'News', component: NewsComponent},
  {path: 'detail/:link', component: NewDetailsComponent},
  {path: 'NewsDetails', component: NewDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'NewsDetails', component: NewDetailsComponent},
  {path: 'Italy', component: ItalyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
