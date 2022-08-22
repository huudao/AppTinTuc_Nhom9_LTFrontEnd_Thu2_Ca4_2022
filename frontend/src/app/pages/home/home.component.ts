import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/service/news-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: NewsApiService) {}

  trangChuResult : any = [];
  // trangChuResultMix : any = [];
  chuyenNhuongResult : any = [];
  tinMoiResult : any = [];
  englandResult : any = [];
  spainResult : any = [];
  vietNamResult : any = [];
  btsResult : any = [];
  championsLeagueResult : any = [];
  vLeagueResult : any = [];
  italyResult : any = [];
  germanyResult : any = [];
  franceResult : any = [];
  videoNewsResult : any = [];
  tinDocNhieuResult : any = [];

  // dateTimeArray : any = [];
  // sDateTime = "21/08/2022 10:22:37";
  // date : any = [];
  // day : number = 0;
  // month : number = 0;
  // year : number = 0;

  // time : any = [];
  // hour : number = 0;
  // minute : number = 0;
  // second : number = 0;

  newPersons : any = [];

  ngOnInit(): void {
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
  }
  
}
