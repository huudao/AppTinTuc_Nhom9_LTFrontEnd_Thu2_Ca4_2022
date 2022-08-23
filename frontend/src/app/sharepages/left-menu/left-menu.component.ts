import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/service/news-api.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  tinDocNhieuResult : any = [];
  vietNamResult : any = [];

  constructor(private service: NewsApiService) { }

  ngOnInit(): void {
    this.service.vietNam().subscribe((result) => {
      this.vietNamResult = result.rss.channel.item;
    })
    this.service.tinDocNhieu().subscribe((result) => {
      this.tinDocNhieuResult = result.rss.channel.item;
    })

  }

  replaceAll(str: string, search: string, replacement: string) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }

}
