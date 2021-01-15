import { Component, OnInit } from '@angular/core';
import { MovieHelper } from 'src/app/config/helpers/movie.helper';
import { IMovie } from 'src/app/config/interfaces/movie.interface';

@Component({
    selector: 'favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss'],
  })

export class FavoritesComponent implements OnInit{
    favoriteMovies: IMovie[]; 
    ngOnInit(){
        this.getFavoriteMovies()       
    }
    getFavoriteMovies(){
      this.favoriteMovies = JSON.parse(localStorage.getItem('films'));
    }
    removeFromFavorites(title: string): void{
      this.favoriteMovies = this.favoriteMovies.filter(item => item.title !== title);
      localStorage.setItem('films', JSON.stringify(this.favoriteMovies));
    }
    getImageUrl(posterPath: string): string {
      return MovieHelper.getImage(posterPath)
    }
  }