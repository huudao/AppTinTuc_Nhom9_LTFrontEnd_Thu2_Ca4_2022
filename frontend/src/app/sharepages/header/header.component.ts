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
  showMenuLeft:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public openSearch(){
    this.showSearch = !this.showSearch;
  }

  public openMenuLeft(){
    this.showMenuLeft = !this.showMenuLeft;
    // alert('button menu left')
  }
  

}
