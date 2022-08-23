import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/service/news-api.service';

@Component({
  selector: 'app-hang-nhat',
  templateUrl: './hang-nhat.component.html',
  styleUrls: ['./hang-nhat.component.scss']
})
export class HangNhatComponent implements OnInit {

  title: string = "Hạng nhất";
  dataArray: any = [];
  
  page : number = 1;
  totalLength : any;

  constructor(private service: NewsApiService) { }

  ngOnInit(): void {
    this.service.hangNhat().subscribe((result) => {
      this.dataArray = result.rss.channel.item;
      this.totalLength = result.rss.channel.item.length;
    })
  }

  replaceAll(str: string, search: string, replacement: string) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }
}