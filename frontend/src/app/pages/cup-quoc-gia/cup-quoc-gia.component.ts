import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/service/news-api.service';

@Component({
  selector: 'app-cup-quoc-gia',
  templateUrl: './cup-quoc-gia.component.html',
  styleUrls: ['./cup-quoc-gia.component.scss']
})
export class CupQuocGiaComponent implements OnInit {

  title: string = "Cúp quốc gia";
  dataArray: any = [];
  
  page : number = 1;
  totalLength : any;

  constructor(private service: NewsApiService) { }

  ngOnInit(): void {
    this.service.nationalCup().subscribe((result) => {
      this.dataArray = result.rss.channel.item;
      this.totalLength = result.rss.channel.item.length;
    })
  }

  replaceAll(str: string, search: string, replacement: string) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }
}
