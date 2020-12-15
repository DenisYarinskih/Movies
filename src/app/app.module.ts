import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MoviesDataService } from './services/MoviesDataService';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesInfoComponent } from './components/movies-info/movies-info.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesInfoComponent,
    MovieListComponent,    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [MoviesDataService],
  bootstrap: [AppComponent], 
})
export class AppModule { }
