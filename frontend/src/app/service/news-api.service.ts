import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http: HttpClient) { }
  trangChuURL = 'https://v1.nocodeapi.com/huudao/xml_to_json/HTsUfoRRPVpjSngg?url=https://www.bongda.com.vn/feed.rss';
  chuyenNhuongURL = 'https://v1.nocodeapi.com/huudao/xml_to_json/HTsUfoRRPVpjSngg?url=https://www.bongda.com.vn/tin-chuyen-nhuong.rss';
  englandURL = 'https://v1.nocodeapi.com/huudao/xml_to_json/HTsUfoRRPVpjSngg?url=https://www.bongda.com.vn/bong-da-anh.rss';
  spainURL = 'https://v1.nocodeapi.com/huudao/xml_to_json/HTsUfoRRPVpjSngg?url=https://www.bongda.com.vn/bong-da-tbn.rss';
  italyURL = 'https://v1.nocodeapi.com/huudao/xml_to_json/HTsUfoRRPVpjSngg?url=https://www.bongda.com.vn/bong-da-y.rss';
  germanyURL = 'https://v1.nocodeapi.com/huudao/xml_to_json/HTsUfoRRPVpjSngg?url=https://www.bongda.com.vn/bong-da-duc.rss';
  franceURL = 'https://v1.nocodeapi.com/huudao/xml_to_json/HTsUfoRRPVpjSngg?url=https://www.bongda.com.vn/bong-da-phap.rss';
  championsLeagueURL = 'https://v1.nocodeapi.com/huudao/xml_to_json/HTsUfoRRPVpjSngg?url=https://www.bongda.com.vn/champions-league.rss';
  vietNamURL = 'https://v1.nocodeapi.com/huudao/xml_to_json/HTsUfoRRPVpjSngg?url=https://www.bongda.com.vn/viet-nam.rss';
  vietNamClubsURL = 'https://v1.nocodeapi.com/huudao/xml_to_json/HTsUfoRRPVpjSngg?url=https://www.bongda.com.vn/doi-tuyen-quoc-gia.rss';
  vLeagueURL = 'https://v1.nocodeapi.com/huudao/xml_to_json/HTsUfoRRPVpjSngg?url=https://www.bongda.com.vn/v-league.rss';
  nationalCupURL = 'https://v1.nocodeapi.com/huudao/xml_to_json/HTsUfoRRPVpjSngg?url=https://www.bongda.com.vn/cup-quoc-gia-vn.rss';
  hangNhatURL = 'https://v1.nocodeapi.com/huudao/xml_to_json/HTsUfoRRPVpjSngg?url=https://www.bongda.com.vn/hang-nhat-vn.rss';
  giaiTreVietNamURL = 'https://v1.nocodeapi.com/huudao/xml_to_json/HTsUfoRRPVpjSngg?url=https://www.bongda.com.vn/giai-tre-vn.rss';
  bongDaNuURL = 'https://v1.nocodeapi.com/huudao/xml_to_json/HTsUfoRRPVpjSngg?url=https://www.bongda.com.vn/bong-da-nu.rss';
  vffURL = 'https://v1.nocodeapi.com/huudao/xml_to_json/HTsUfoRRPVpjSngg?url=https://www.bongda.com.vn/vff.rss';
  btsURL = 'https://v1.nocodeapi.com/huudao/xml_to_json/HTsUfoRRPVpjSngg?url=https://www.bongda.com.vn/hau-truong-san-co.rss';
  videoNewsURL = 'https://v1.nocodeapi.com/huudao/xml_to_json/HTsUfoRRPVpjSngg?url=https://www.bongda.com.vn/video.rss';

  trangChu() : Observable<any> {
    return this.http.get(this.trangChuURL);
  }

  chuyenNhuong() : Observable<any> {
    return this.http.get(this.chuyenNhuongURL);
  }

  england() : Observable<any> {
    return this.http.get(this.englandURL);
  }

  spain() : Observable<any> {
    return this.http.get(this.spainURL);
  }

  italy() : Observable<any> {
    return this.http.get(this.italyURL);
  }

  germany() : Observable<any> {
    return this.http.get(this.germanyURL);
  }

  france() : Observable<any> {
    return this.http.get(this.franceURL);
  }

  championsLeague() : Observable<any> {
    return this.http.get(this.championsLeagueURL);
  }

  vietNam() : Observable<any> {
    return this.http.get(this.vietNamURL);
  }

  vietNamClubs() : Observable<any> {
    return this.http.get(this.vietNamClubsURL);
  }

  vLeague() : Observable<any> {
    return this.http.get(this.vLeagueURL);
  }

  nationalCup() : Observable<any> {
    return this.http.get(this.nationalCupURL);
  }

  hangNhat() : Observable<any> {
    return this.http.get(this.hangNhatURL);
  }

  giaiTre() : Observable<any> {
    return this.http.get(this.giaiTreVietNamURL);
  }

  bongDaNu() : Observable<any> {
    return this.http.get(this.bongDaNuURL);
  }

  vff() : Observable<any> {
    return this.http.get(this.vffURL);
  }

  bts() : Observable<any> {
    return this.http.get(this.btsURL);
  }

  videoNews() : Observable<any> {
    return this.http.get(this.videoNewsURL);
  }
}
