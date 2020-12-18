import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMoviesDTO } from '../config/interfaces/iMovieDto';
import { map } from 'rxjs/operators';

@Injectable()
export class MoviesDataService {
  response: any;
  constructor(private http: HttpClient){}

  getMoviesShort(pageNumber: number): Observable<IMoviesDTO>{
    return this.http.get<IMoviesDTO>(this.getUrl('now_playing', pageNumber)).pipe(
        map(movieDto =>  {
          this.response = movieDto;
          return movieDto;
        })
    )
  }

  private getUrl(targetPlace: string, pageNumber: number): string {
      return `http://api.themoviedb.org/3/movie/${targetPlace}?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=${pageNumber}`
    } 
}