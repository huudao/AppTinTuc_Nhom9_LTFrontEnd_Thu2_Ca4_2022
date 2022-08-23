import {Component, Inject, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {fromEvent, throttleTime} from "rxjs";
import {Router} from "@angular/router";
import {SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import { GoogleApiService } from 'src/app/pages/login/google-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showSearch:boolean = false;
  showMenuLeft:boolean = false;

  user: any;
  loggedIn!: boolean;

  constructor(@Inject(DOCUMENT) document: Document ,private readonly googleService: GoogleApiService,private router: Router, public socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  public openSearch(){
    this.showSearch = !this.showSearch;
  }

  public openMenuLeft(){
    this.showMenuLeft = !this.showMenuLeft;
    // alert('button menu left')
  }

  isLoggedIn():boolean {
    return this.googleService.isLogginIn();
  }
  logout(){
    this.socialAuthService.signOut();
    // localStorage.removeItem("userInfor");
    // this.router.navigateByUrl('/')
    // this.googleService.signOut();
  }
  

}
