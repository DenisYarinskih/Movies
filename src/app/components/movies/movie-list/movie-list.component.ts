import { Component, OnInit } from '@angular/core';
import { IMoviesDTO } from '../../../config/interfaces/iMovieDto';
import { MoviesDataService } from '../../../services/MoviesDataService';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  currentPage: number;
  moviesData: IMoviesDTO = null;

  constructor(private _employeeService: MoviesDataService) { }

  ngOnInit(): void {
    this.loadMovies(1);
  }

  loadMovies(pageNumber: number): void {
    this._employeeService.getMoviesShort(pageNumber)
      .subscribe((moviesData: IMoviesDTO) => { 
        this.moviesData = moviesData;
        this.currentPage = moviesData.page;
      });
  }

  getImageUrl(poster_path: string): string {
    return `http://image.tmdb.org/t/p/w342${poster_path}`;              
  }     
}
