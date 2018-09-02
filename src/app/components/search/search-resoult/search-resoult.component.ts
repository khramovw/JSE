import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-resoult',
  templateUrl: './search-resoult.component.html',
  styleUrls: ['./search-resoult.component.css']
})
export class SearchResoultComponent implements OnInit {
  @Input() searchresult;
  filmssearch;

  constructor() { }

  ngOnInit() {
    // this.filmssearch = this.searchresult.results;
    console.log('app-search-resoult', this.searchresult);
  }

}
