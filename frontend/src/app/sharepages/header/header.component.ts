import { style } from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showSearch: boolean = false;
  showMenuLeft: boolean = false;
  // searchTerm: string = "";

  constructor(private  router : Router, private  ativatedRouter :ActivatedRoute) { }

  ngOnInit(): void {
    // this.ativatedRouter.params.subscribe(params => {
    //   this.searchTerm = params['searchTerm'];
    // });
  }

  public openSearch() {
    this.showSearch = !this.showSearch;
  }

  public openMenuLeft() {
    this.showMenuLeft = !this.showMenuLeft;
  }

  // @Output()
  // searchTextChanged:EventEmitter<string> = new EventEmitter<string>();
  // onSearchTextChange() {

  //   this.searchTextChanged.emit(this.searchTerm);
  // }

  // search(){
  //   this.router.navigate(['/search',this.searchTerm],{
  //     state:{signoreLoadingBar: true}
  //   });
  // }



}
