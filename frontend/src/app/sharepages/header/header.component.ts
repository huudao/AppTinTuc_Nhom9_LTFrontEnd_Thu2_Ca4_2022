import {Component, Inject, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {fromEvent, throttleTime} from "rxjs";
import {Router} from "@angular/router";
import {SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import { GoogleApiService } from 'src/app/pages/login/google-api.service';
import { NewsApiService } from 'src/app/service/news-api.service';
import {EventEmitter, Output } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  trangChuResult : any = [];
  chuyenNhuongResult : any = [];
  tinMoiResult : any = [];
  englandResult : any = [];
  spainResult : any = [];
  vietNamResult : any = [];
  btsResult : any = [];
  championsLeagueResult : any = [];
  vLeagueResult : any = [];
  tinDocNhieuResult : any = [];
  vietNamClubsResult : any = [];
  nationalCupResult : any = [];
  hangNhatResult : any = [];
  giaiTreVietNamResult : any = [];
  bongDaNuResult : any = [];
  vffResult : any = [];
  italyResult : any = [];
  germanyResult : any = [];
  franceResult : any = [];
  videoNewsResult : any = [];
  showSearch: boolean = false;
  showMenuLeft: boolean = false;
  searchTerm: string = "";

  user: any;
  loggedIn!: boolean;

  constructor(private ativatedRouter: ActivatedRoute, private service: NewsApiService ,private readonly googleService: GoogleApiService,private router: Router, public socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    this.service.trangChu().subscribe((result) => {
      console.log(result);
      this.trangChuResult = result.rss.channel.item;
      // this.trangChuResultMix = this.trangChuResult.sort(() => Math.random() - 0.5);
    })

    this.service.chuyenNhuong().subscribe((result) => {
      this.chuyenNhuongResult = result.rss.channel.item;
    })

    this.service.tinMoi().subscribe((result) => {
      this.tinMoiResult = result.rss.channel.item;
    })

    this.service.england().subscribe((result) => {
      this.englandResult = result.rss.channel.item;
    })

    this.service.spain().subscribe((result) => {
      this.spainResult = result.rss.channel.item;
    })

    this.service.vietNam().subscribe((result) => {
      this.vietNamResult = result.rss.channel.item;
    })

    this.service.vietNamClubs().subscribe((result) => {
      this.vietNamClubsResult = result.rss.channel.item;
    })

    this.service.nationalCup().subscribe((result) => {
      this.nationalCupResult = result.rss.channel.item;
    })

    this.service.hangNhat().subscribe((result) => {
      this.hangNhatResult = result.rss.channel.item;
    })

    this.service.giaiTre().subscribe((result) => {
      this.giaiTreVietNamResult = result.rss.channel.item;
    })

    this.service.bongDaNu().subscribe((result) => {
      this.bongDaNuResult = result.rss.channel.item;
    })

    this.service.vff().subscribe((result) => {
      this.vffResult = result.rss.channel.item;
    })

    this.service.bts().subscribe((result) => {
      this.btsResult = result.rss.channel.item;
    })

    this.service.championsLeague().subscribe((result) => {
      this.championsLeagueResult = result.rss.channel.item;
    })

    this.service.italy().subscribe((result) => {
      this.italyResult = result.rss.channel.item;
    })

    this.service.vLeague().subscribe((result) => {
      this.vLeagueResult = result.rss.channel.item;
    })

    this.service.germany().subscribe((result) => {
      this.germanyResult = result.rss.channel.item;
    })

    this.service.france().subscribe((result) => {
      this.franceResult = result.rss.channel.item;
    })

    this.service.videoNews().subscribe((result) => {
      this.videoNewsResult = result.rss.channel.item;
    })

    this.service.tinDocNhieu().subscribe((result) => {
      this.tinDocNhieuResult = result.rss.channel.item;
    })
    this.ativatedRouter.params.subscribe(params => {
      this.searchTerm = params['searchTerm'];
    });
  }

  public openSearch() {
    this.showSearch = !this.showSearch;
  }

  public openMenuLeft() {
    this.showMenuLeft = !this.showMenuLeft;
  }

  @Output()
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChange() {

    this.searchTextChanged.emit(this.searchTerm);
  }

  search(){
    this.router.navigate(['/search',this.searchTerm]);
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
