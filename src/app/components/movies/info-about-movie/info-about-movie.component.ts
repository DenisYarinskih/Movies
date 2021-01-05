import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { IMovie } from 'src/app/config/interfaces/movie.interface';
import { MoviesDataService } from 'src/app/services/movies-data.service';
import { switchMap, take, takeUntil } from 'rxjs/operators';
import { MovieHelper } from 'src/app/config/helpers/movie.helper';

@Component({
  selector: 'app-info-about-movie',
  templateUrl: './info-about-movie.component.html',
  styleUrls: ['./info-about-movie.component.scss']
})
export class InfoAboutMovieComponent implements OnInit {
  filmInfo: IMovie;
  onDestroy$ = new Subject<void>();

  constructor(private activatedRoute: ActivatedRoute, private movieDataService: MoviesDataService){}
  
  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(params => this.movieDataService.getMovieById(params.id)),
        take(1),
        takeUntil(this.onDestroy$)
    ).subscribe(movie => this.filmInfo = movie)    
  }
  ngOnDestroy(): void{
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
  getImageUrl(posterPath: string): string {
    return MovieHelper.getImage(posterPath)
  }
  
  get releaseYear(): string {
    return this.filmInfo.release_date.split("-")[0];
  }
}
