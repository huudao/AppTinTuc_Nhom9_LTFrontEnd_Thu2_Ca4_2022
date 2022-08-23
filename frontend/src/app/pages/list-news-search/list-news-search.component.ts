import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/service/news-api.service';
import { forkJoin } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-list-news-search',
  templateUrl: './list-news-search.component.html',
  styleUrls: ['./list-news-search.component.scss']
})
export class ListNewsSearchComponent implements OnInit {
  arrSearchResult : any = [];

  totalLength : any;
  page: number = 1;

  constructor(private service: NewsApiService,private  router : Router,private  ativatedRouter :ActivatedRoute) { }

  ngOnInit(): void {
    this.ativatedRouter.params.subscribe(params => {
      this.searchText = params['searchTerm'];
    });
    this.getItems();
  }

  searchText: string = '';
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;

  }

  getItems(): void{
    const trangChu = this.service.trangChu();
    const chuyenNhuong = this.service.chuyenNhuong();
    const tinMoi = this.service.tinMoi();
    const england = this.service.england();
    const spain = this.service.spain();
    const italy = this.service.italy();
    const germany = this.service.germany();
    const france = this.service.france();
    const championsLeague = this.service.championsLeague();
    const vietNam = this.service.vietNam();
    const vietNamClubs = this.service.vietNamClubs();
    const vLeague = this.service.vLeague();
    const nationalCup = this.service.nationalCup();
    const hangNhat = this.service.hangNhat();
    const giaiTre = this.service.giaiTre();
    const bongDaNu = this.service.bongDaNu();
    const vff = this.service.vff();
    const bts = this.service.bts();
    const videoNews = this.service.videoNews();
    const tinDocNhieu = this.service.tinDocNhieu();
    forkJoin([trangChu, chuyenNhuong, tinMoi, england, spain, italy, germany, france, championsLeague, 
      vietNam, vietNamClubs, vLeague, nationalCup, hangNhat, giaiTre, bongDaNu, vff, bts, videoNews, tinDocNhieu]).subscribe((result) => {
        this.arrSearchResult = result[0].rss.channel.item.concat(
          result[1].rss.channel.item.concat(
            result[2].rss.channel.item.concat(
              result[3].rss.channel.item.concat(
                result[4].rss.channel.item.concat(
                  result[5].rss.channel.item.concat(
                    result[6].rss.channel.item.concat(
                      result[7].rss.channel.item.concat(
                        result[8].rss.channel.item.concat(
                          result[9].rss.channel.item.concat(
                            result[10].rss.channel.item.concat(
                              result[11].rss.channel.item.concat(
                                result[12].rss.channel.item.concat(
                                  result[13].rss.channel.item.concat(
                                    result[14].rss.channel.item.concat(
                                      result[15].rss.channel.item.concat(
                                        result[16].rss.channel.item.concat(
                                          result[17].rss.channel.item.concat(
                                            result[18].rss.channel.item.concat(
                                              result[19].rss.channel.item.concat(
                                    )))))))))))))))))))
        );

        console.log(result);

      })
  }

  

  replaceAll(str:string, search:string, replacement:string) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }
}
