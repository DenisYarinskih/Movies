import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMoviesDTO, IMovieShort } from '../interfaces/moviesInterface';
import { map } from 'rxjs/operators';

@Injectable()
export class MoviesDataService {

    url: string = "http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c";

    constructor(private http: HttpClient){}

    getMoviesShort(): Observable<IMovieShort[]>{
        return this.http.get<IMoviesDTO>(this.url).pipe(
            map(movieDto =>  {
              const results = movieDto.results;
              return results.map(movie => ({id: movie.id, poster_path: movie.poster_path }))
            })
          )
    }
}