import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employeeService';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesInfoComponent } from './movies-info/movies-info.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesInfoComponent,
    MovieListComponent,
    MovieCardComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
