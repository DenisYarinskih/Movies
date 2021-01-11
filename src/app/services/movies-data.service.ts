import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMoviesDTO } from '../config/interfaces/iMovieDto.interface';
import { IMovie } from '../config/interfaces/movie.interface';

@Injectable()
export class MoviesDataService {
  constructor(private http: HttpClient){}

  getMoviesShort(targetPlace: string, pageNumber: number): Observable<IMoviesDTO>{
      return this.http.get<IMoviesDTO>(this.getUrl(targetPlace, pageNumber));
  }
  getMovieById(id: number): Observable<IMovie>{
    return this.http.get<IMovie>(this.getUrl(String(id))); 
  }
  private getUrl(targetPlace: string, pageNumber?: number): string {
    let baseUrl = `http://api.themoviedb.org/3/movie/${targetPlace}?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c`;
    if(pageNumber){
      baseUrl += `&page=${pageNumber}`;
    }
    return baseUrl;
  } 
}