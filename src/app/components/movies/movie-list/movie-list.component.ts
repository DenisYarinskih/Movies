import { Component, OnInit } from '@angular/core';
import { IMoviesDTO } from '../../../config/interfaces/iMovieDto';
import { MoviesDataService } from '../../../services/MoviesDataService';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  moviesData: IMoviesDTO;

  constructor(private employeeService: MoviesDataService) { }

  ngOnInit(): void {
    this.loadMovies(1);
  }

  loadMovies(pageNumber: number): void {
    this.employeeService.getMoviesShort(pageNumber)
      .subscribe(moviesData => { 
        this.moviesData = moviesData;
      });
  }

  getImageUrl(poster_path: string): string {
    return `http://image.tmdb.org/t/p/w342${poster_path}`;              
  }     
}
