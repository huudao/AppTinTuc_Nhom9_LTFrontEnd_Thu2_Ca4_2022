import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/service/news-api.service';

@Component({
  selector: 'app-tin-chuyen-nhuong',
  templateUrl: './tin-chuyen-nhuong.component.html',
  styleUrls: ['./tin-chuyen-nhuong.component.scss']
})
export class TinChuyenNhuongComponent implements OnInit {

  title: string = "Tin chuyển nhượng";
  dataArray: any = [];
  
  page : number = 1;
  totalLength : any;

  constructor(private service: NewsApiService) { }

  ngOnInit(): void {
    this.service.chuyenNhuong().subscribe((result) => {
      this.dataArray = result.rss.channel.item;
      this.totalLength = result.rss.channel.item.length;
    })
  }

  replaceAll(str: string, search: string, replacement: string) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }
}
