import { Component, OnInit } from '@angular/core';
import { IMovieShort } from '../../interfaces/moviesInterface';
import { MoviesDataService } from '../../services/MoviesDataService';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  listOfMovies: IMovieShort[];

  constructor(private _employeeService: MoviesDataService) { }

  ngOnInit(): void {
    this.initListOfMovies();
  }

  initListOfMovies(): void {
    this._employeeService.getMoviesShort().subscribe((moviesShort: IMovieShort[]) => this.listOfMovies = moviesShort);
  }

  getImageUrl(poster_path: string): string {
    return `http://image.tmdb.org/t/p/w342${poster_path}`;            
  }       
}
