import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/service/news-api.service';

@Component({
  selector: 'app-tin-moi-nhat',
  templateUrl: './tin-moi-nhat.component.html',
  styleUrls: ['./tin-moi-nhat.component.scss']
})
export class TinMoiNhatComponent implements OnInit {

  title: string = "Tin mới nhất";
  dataArray: any = [];
  
  page : number = 1;
  totalLength : any;

  constructor(private service: NewsApiService) { }

  ngOnInit(): void {
    this.service.tinMoi().subscribe((result) => {
      this.dataArray = result.rss.channel.item;
      this.totalLength = result.rss.channel.item.length;
    })
  }

  replaceAll(str: string, search: string, replacement: string) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }
}
