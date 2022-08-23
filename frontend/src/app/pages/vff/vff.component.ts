import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/service/news-api.service';

@Component({
  selector: 'app-vff',
  templateUrl: './vff.component.html',
  styleUrls: ['./vff.component.scss']
})
export class VffComponent implements OnInit {

  title: string = "vff";
  dataArray: any = [];
  
  page : number = 1;
  totalLength : any;

  constructor(private service: NewsApiService) { }

  ngOnInit(): void {
    this.service.vff().subscribe((result) => {
      this.dataArray = result.rss.channel.item;
      this.totalLength = result.rss.channel.item.length;
    })
  }

  replaceAll(str: string, search: string, replacement: string) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }
}
