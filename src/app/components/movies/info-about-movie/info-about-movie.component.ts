import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { IMovie } from 'src/app/config/interfaces/movie.interface';
import { MoviesDataService } from 'src/app/services/movies-data.service';
import { switchMap } from 'rxjs/operators';
import { MovieHelper } from 'src/app/config/helpers/movie.helper';

@Component({
  selector: 'app-info-about-movie',
  templateUrl: './info-about-movie.component.html',
  styleUrls: ['./info-about-movie.component.scss']
})
export class InfoAboutMovieComponent implements OnInit {
  filmInfo: IMovie;
  buttonState: string = 'Add to favorite';
  isFavorite: boolean = true;
  onDestroy$ = new Subject<void>();
  removeMovieList: any = [];
  constructor(private activatedRoute: ActivatedRoute, private movieDataService: MoviesDataService){}
  
  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(params => this.movieDataService.getMovieById(params.id))        
    ).subscribe(movie => {
      this.filmInfo = movie;
      const movies = JSON.parse(localStorage.getItem('films')) || [];
      this.isFavorite = movies.some(item => item.id === this.filmInfo.id);    
    }
  );
  }

  getImageUrl(posterPath: string): string {
    return MovieHelper.getImage(posterPath)
  }
  
  changeState(film: IMovie): void {   
    
    let movies = JSON.parse(localStorage.getItem('films')) || [];

    this.isFavorite ? movies = movies.filter(item => item.id !== film.id) : movies.push(film);
    
    localStorage.setItem('films', JSON.stringify(movies)); 
    this.isFavorite = !this.isFavorite;
  }
  get releaseYear(): string {
    return this.filmInfo.release_date.split("-")[0];
  }
  get favoriteButtonText(): string{
    return this.isFavorite ? 'Unfavorite' : 'Add to Favorite';
  }
}
