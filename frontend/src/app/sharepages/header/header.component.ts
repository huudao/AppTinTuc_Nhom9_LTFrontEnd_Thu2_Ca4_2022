import { style } from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showSearch:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  hiden = false;
  public openSearch(){
    this.showSearch = !this.showSearch;
  }

  

}
