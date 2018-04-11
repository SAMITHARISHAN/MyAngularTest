import { Injectable } from '@angular/core';
import { MyMovie } from '../shared/moviedata.model';
import { SAVED_MOVIES } from '../shared/moviedata';

@Injectable()
export class MoviesService {

  constructor() { }

  getMovies(): MyMovie[]{
    return SAVED_MOVIES.slice(0);
  }

  getTotalMovies(allMovies: MyMovie[]){

    return allMovies.length;
  }

}
