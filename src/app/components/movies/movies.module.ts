import { NgModule } from '@angular/core';
import { MoviesDataService } from '../../services/MoviesDataService';
import { HeaderComponent } from '../../components/movies/header/header.component';
import { MoviesInfoComponent } from '../../components/movies/movies-info/movies-info.component';
import { MovieListComponent } from '../../components/movies/movie-list/movie-list.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MoviesInfoComponent,
    MovieListComponent,
    MoviesComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
  ],
  providers: [MoviesDataService],
})
export class MoviesModule {}