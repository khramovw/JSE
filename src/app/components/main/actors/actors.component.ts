import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  @Input() searchresult;

  constructor() { }

  ngOnInit() {
  }

  //  Get search result
  getSearchResult (e) {
    console.log('search', e, this.searchresult);
  }

  // Pagination
  pageEventFoo(e, pageevent) {
    // this.getPageofNumber(((e.pageIndex + 1) * (e.pageSize / 20)));
  }

}
