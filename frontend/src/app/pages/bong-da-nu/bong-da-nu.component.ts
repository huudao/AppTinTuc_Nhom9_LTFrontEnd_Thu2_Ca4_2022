import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/service/news-api.service';

@Component({
  selector: 'app-bong-da-nu',
  templateUrl: './bong-da-nu.component.html',
  styleUrls: ['./bong-da-nu.component.scss']
})
export class BongDaNuComponent implements OnInit {

  title: string = "Bóng đá nữ";
  dataArray: any = [];
  
  page : number = 1;
  totalLength : any;

  constructor(private service: NewsApiService) { }

  ngOnInit(): void {
    this.service.bongDaNu().subscribe((result) => {
      this.dataArray = result.rss.channel.item;
      this.totalLength = result.rss.channel.item.length;
    })
  }

  replaceAll(str: string, search: string, replacement: string) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }
}
