import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MovieHelper } from 'src/app/config/helpers/movie.helper';
import { IMoviesDTO } from '../../../config/interfaces/iMovieDto.interface';
import { MoviesDataService } from '../../../services/movies-data.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit { 
  @Output() newPage = new EventEmitter()
  moviesData: IMoviesDTO;
  currentPage: string;

  constructor(private employeeService: MoviesDataService, private router: Router) { }

  ngOnInit(): void {
    this.loadMovies(1);
  }

  loadMovies(pageNumber: number): void {
    this.employeeService.getMoviesShort(pageNumber)
      .subscribe(moviesData => this.moviesData = moviesData);
  }

  getImageUrl(posterPath: string): string {
    return MovieHelper.getImage(posterPath)
  }
    
  goToMovieInfo(movieId: number): void{
    this.router.navigate(['movies',movieId]) 
  }
}
