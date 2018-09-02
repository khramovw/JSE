import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

// Services
import { MoviedbService } from '../../services/moviedb.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() serchIn;
  @Output() searchresult = new EventEmitter<any>();
  query = '';

  constructor( public moviedb: MoviedbService ) { }

  ngOnInit() {
  }

  onSerch () {
    if ( this.query && this.query.length > 3 ) {
      this.moviedb.getSearchFilms(this.query.toLowerCase(), this.serchIn).subscribe( res => this.searchresult.emit(res));
    } else {
      this.searchresult.emit(false);
    }
  }
}


