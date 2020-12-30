import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IMoviesDTO } from '../../../config/interfaces/iMovieDto.interface';
import { MoviesDataService } from '../../../services/movies-data.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  moviesData: IMoviesDTO;
  currentPage: string;
  @Output() newPage: EventEmitter<IMoviesDTO> = new EventEmitter()
  private http: HttpClient;

  constructor(private employeeService: MoviesDataService, private router: Router) { }

  ngOnInit(): void {
    this.loadMovies(1);
  }

  loadMovies(pageNumber: number): void {
    this.employeeService.getMoviesShort(pageNumber)
      .subscribe(moviesData => this.moviesData = moviesData);
  }

  getImageUrl(posterPath: string): string {
    return `http://image.tmdb.org/t/p/w342${posterPath}`;              
  }     

  getInfo(movieId: number){
    this.router.navigate(['movies',movieId])
  }
}
