import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CategoriesDTOEnum } from 'src/app/config/enum/categoriesDTOEnum';
import { CategoriesEnum } from 'src/app/config/enum/categoriesEnum';
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
  category: CategoriesEnum;  
  categoriesDTO: CategoriesDTOEnum;

  constructor(private employeeService: MoviesDataService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {   
    this.activatedRoute.queryParams.pipe(
      switchMap(params => {
        this.categoriesDTO = params.category ? params.category : 'now_playing';
        return this.employeeService.getMoviesShort(this.categoriesDTO, 1);
      })
    ).subscribe(moviesData => this.moviesData = moviesData);    
  }

  loadMovies(pageNumber: number): void {
    this.employeeService.getMoviesShort(this.categoriesDTO,pageNumber)
      .subscribe(moviesData => this.moviesData = moviesData);
  }

  getImageUrl(posterPath: string): string {
    return MovieHelper.getImage(posterPath)
  }
    
  goToMovieInfo(movieId: number): void{
    this.router.navigate(['movies',movieId]) 
  }

  get movieTitle(): string{
    switch(this.categoriesDTO) {
      case CategoriesDTOEnum.NOW_PLAYING: 
        return CategoriesEnum.NOW_PLAYING;
      case CategoriesDTOEnum.POPULAR: 
        return CategoriesEnum.POPULAR;
      case CategoriesDTOEnum.TOP_RATED:
        return CategoriesEnum.TOP_RATED;
      case CategoriesDTOEnum.UPCOMING:
        return CategoriesEnum.UPCOMING;  
      default: 
        return ''
    }
  }
}
