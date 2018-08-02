import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {

  @Input() film;
  @Output() favorite = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  addToFavorite () {
    this.favorite.emit(this.film);
  }

}
