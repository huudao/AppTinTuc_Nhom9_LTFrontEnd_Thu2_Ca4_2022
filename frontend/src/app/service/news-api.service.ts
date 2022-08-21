import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http: HttpClient) { }
  trangChuURL = 'https://v1.nocodeapi.com/huudao/xml_to_json/HTsUfoRRPVpjSngg?url=https://www.bongda.com.vn/feed.rss';
  chuyenNhuongURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.bongda.com.vn%2Ftin-chuyen-nhuong.rss';
  englandURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.bongda.com.vn%2Fbong-da-anh.rss';
  spainURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.bongda.com.vn%2Fbong-da-tbn.rss';
  italyURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.bongda.com.vn%2Fbong-da-y.rss';
  germanyURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.bongda.com.vn%2Fbong-da-duc.rss';
  franceURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.bongda.com.vn%2Fbong-da-phap.rss';
  championsLeagueURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.bongda.com.vn%2Fchampions-league.rss';
  vietNamURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.bongda.com.vn%2Fviet-nam.rss';
  vietNamClubsURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.bongda.com.vn%2Fdoi-tuyen-quoc-gia.rss';
  vLeagueURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.bongda.com.vn%2Fv-league.rss';
  nationalCupURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.bongda.com.vn%2Fcup-quoc-gia-vn.rss';
  hangNhatURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.bongda.com.vn%2Fhang-nhat-vn.rss';
  giaiTreVietNamURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.bongda.com.vn%2Fgiai-tre-vn.rss';
  bongDaNuURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.bongda.com.vn%2Fbong-da-nu.rss';
  vffURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.bongda.com.vn%2Fvff.rss';
  btsURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.bongda.com.vn%2Fhau-truong-san-co.rss';
  videoNewsURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.bongda.com.vn%2Fvideo.rss';

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
