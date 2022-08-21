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
  trangChuResultMix : any = [];
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

      this.trangChuResultMix = this.trangChuResult.sort(() => Math.random() - 0.5);
      console.log(this.trangChuResultMix);
    })

   
  }

}
