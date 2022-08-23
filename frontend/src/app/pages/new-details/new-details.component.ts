import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';
import { NewsApiService } from 'src/app/service/news-api.service';

@Component({
  selector: 'app-new-details',
  templateUrl: './new-details.component.html',
  styleUrls: ['./new-details.component.scss']
})
export class NewDetailsComponent implements OnInit {
  url:SafeResourceUrl='';
  comment="";
  userName="";
  postComment=[{
    comment:this.comment,
    userName:this.userName
  }];
  data:any=[];
  
  constructor(private route:ActivatedRoute, private  service:NewsApiService,public sanitizer:DomSanitizer) { }

  resultDetail1:any;
  
  resultDetail:any;

  post(){
    // @ts-ignore
    this.postComment.push({comment:this.comment,userName:this.userName});
    // @ts-ignore
    this.comment="";
    this.userName="";
  }

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
      this.resultDetail = params.get('link');
      localStorage.setItem("comment",JSON.stringify(this.postComment));
    });
    this.resultDetail1 = this.resultDetail.replaceAll('?','/')
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.resultDetail1);

  }

 

}
