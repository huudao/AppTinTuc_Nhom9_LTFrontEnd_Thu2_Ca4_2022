import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/service/news-api.service';

@Component({
  selector: 'app-clubs-viet-nam',
  templateUrl: './clubs-viet-nam.component.html',
  styleUrls: ['./clubs-viet-nam.component.scss']
})
export class ClubsVietNamComponent implements OnInit {

  title: string = "Các ĐTBĐ";
  dataArray: any = [];
  
  page : number = 1;
  totalLength : any;

  constructor(private service: NewsApiService) { }

  ngOnInit(): void {
    this.service.vietNamClubs().subscribe((result) => {
      this.dataArray = result.rss.channel.item;
      this.totalLength = result.rss.channel.item.length;
    })
  }

  replaceAll(str: string, search: string, replacement: string) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }
}
