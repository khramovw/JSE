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
  genreUrl     = `${this.apiUrl}/genre/movie/list?`;
  params        = `api_key=${this.apiKey}&language=ru-RU`;

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
  getPopularFilms (page?: number) {
    return this.http.get(`${this.movieUrl}/popular?page=${page}&${this.params}`);
  }

  getGenres () {
    return this.http.get(`${this.genreUrl}${this.params}`);
  }

  getSearchFilms (getquery, searchin) {
    return this.http.get(`${this.searchUrl}${searchin}?${this.params}&query=${getquery}&page=1&include_adult=false&region=ru`);
  }

}
