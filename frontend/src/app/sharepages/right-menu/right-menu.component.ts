import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/service/news-api.service';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.scss']
})
export class RightMenuComponent implements OnInit {
  
  tinDocNhieuResult : any = [];
  tinMoiResult : any = [];

  constructor(private service: NewsApiService) { }

  ngOnInit(): void {
    this.service.tinDocNhieu().subscribe((result) => {
      this.tinDocNhieuResult = result.rss.channel.item;
    })
    this.service.tinMoi().subscribe((result) => {
      this.tinMoiResult = result.rss.channel.item;
    })
  }

  replaceAll(str: string, search: string, replacement: string) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }
}
