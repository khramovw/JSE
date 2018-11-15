import {Component, Input, OnInit} from '@angular/core';
import {MoviedbService} from '../../../services/moviedb.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  @Input() searchresult;
  actors: any;
  imgsizepath: any = this.moviedb.getParamsPostersSrc();
  imgPath: string = this.imgsizepath.smallImgPath;
  known: any;
  actorsearch: string;
  imagePath: any;

  // MatPaginator Inputs
  length = 100;
  pageSize = 20;
  pageSizeOptions: number[] = [20, 40, 60, 100];

  constructor( private moviedb: MoviedbService) { }

  ngOnInit() {
    this.moviedb.getActors(1).subscribe( (actor: any) => {
      console.log(actor);
      this.actors = actor.results;
      this.known = actor.results.filter( person => {
        console.log(person.known_for);
      });
    });
    this.moviedb.getParams().subscribe( ( params: any ) => {
      console.log(params);
      this.imagePath = `${params.images.base_url}${params.images.profile_sizes[1]}`;
    });
  }

  //  Get search result
  getSearchResult (e) {
    console.log('search', e, this.searchresult);
    this.actorsearch = e.results;
  }

  // Pagination
  pageEventFoo(e, pageevent) {
    // this.getPageofNumber(((e.pageIndex + 1) * (e.pageSize / 20)));
  }

}
