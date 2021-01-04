import { NgModule } from '@angular/core';
import { MoviesDataService } from '../../services/movies-data.service';
import { HeaderComponent } from '../../components/movies/header/header.component';
import { MoviesInfoComponent } from '../../components/movies/movies-info/movies-info.component';
import { MovieListComponent } from '../../components/movies/movie-list/movie-list.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { InfoAboutMovieComponent } from './info-about-movie/info-about-movie.component';
import { MovieHelper } from 'src/app/config/helpers/movie.helper';

@NgModule({
  declarations: [
    HeaderComponent,
    MoviesInfoComponent,
    MovieListComponent,
    MoviesComponent,    
    PaginationComponent,
    InfoAboutMovieComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  providers: [MoviesDataService,MovieHelper]
})
export class MoviesModule {}