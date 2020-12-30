import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/config/interfaces/movie.interface';
import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie: IMovie;
  thisPage: MovieListComponent;

  ngOnInit(): void {
    this.thisPage
  }
}
