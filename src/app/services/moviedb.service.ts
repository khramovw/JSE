import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {
  apiUrl        = 'https://api.themoviedb.org/3';
  apiKey        = '0994e7679a856150aadcecf7de489bce';
  movieUrl      = `${this.apiUrl}/movie`;
  searchUrl     = `${this.apiUrl}/search`;
  personUrl     = `${this.apiUrl}/person`;
  genreUrl      = `${this.apiUrl}/genre/movie/list?`;
  params        = `api_key=${this.apiKey}&language=ru-RU`;
  configuration = `${this.apiUrl}/configuration?${this.params}`;

  // Size image posters
  posterSize    = {};
  imgPath       = 'https://image.tmdb.org/t/p';
  // midImgPath    = `${this.imgPath}/w500`;
  //   // smallImgPath  = `${this.imgPath}/w185`;
  //   // bigBackPath   = `${this.imgPath}/w1280`;
  //   // midBackPath   = `${this.imgPath}/w780`;
  //   // smallBackPath = `${this.imgPath}/w300`;

  constructor( public http: HttpClient ) { }

  getParamsPostersSrc () {
    return this.posterSize = {
      smallImgPath  : `${this.imgPath}/w185`,
      smallBackPath : `${this.imgPath}/w300`,
      midImgPath    : `${this.imgPath}/w500`,
      midBackPath   : `${this.imgPath}/w780`,
      bigBackPath   : `${this.imgPath}/w1280`,
    };
  }
  getParams () {
    return this.http.get(`${this.configuration}`);
  }

  getFilms (page: number, paramget: string = '/popular') {
    return this.http.get(`${this.movieUrl}${paramget}?${this.params}&page=${page}`);
  }

  getGenres () {
    return this.http.get(`${this.genreUrl}${this.params}`);
  }

  getSearch (getquery: string, searchin: string) {
    return this.http.get(`${this.searchUrl}${searchin}?${this.params}&query=${getquery}&page=1&include_adult=true&region=ru`);
  }

  getActors (page?: number) {
    return this.http.get(`${this.personUrl}/popular?page=${page}&${this.params}`);
  }

  getFilm (film_id: number = 0) {
    //  https://api.themoviedb.org/3/movie/348350?api_key=0994e7679a856150aadcecf7de489bce&language=en-US
    return this.http.get(`${this.movieUrl}/${film_id}?${this.params}`);
  }

}
