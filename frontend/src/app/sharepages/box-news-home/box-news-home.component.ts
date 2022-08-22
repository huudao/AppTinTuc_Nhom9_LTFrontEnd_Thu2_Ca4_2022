import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-news-home',
  templateUrl: './box-news-home.component.html',
  styleUrls: ['./box-news-home.component.scss']
})
export class BoxNewsHomeComponent {
  @Input() title?: string;
  @Input() arrData? : any;
  constructor() { }

}
