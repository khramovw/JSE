import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

// Services
import { MoviedbService } from '../../services/moviedb.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() serchIn: string;
  @Output() searchresult = new EventEmitter<Object>();

  query: string = '';

  constructor( public moviedb: MoviedbService ) { }

  ngOnInit() {
  }
// Get result of search
  onSerch () {
    this.query && this.query.length > 2 ?
      this.moviedb.getSearch(this.query.toLowerCase(), this.serchIn).subscribe( res => this.searchresult.emit(res)) :
        this.searchresult.emit(false);
  }
}


