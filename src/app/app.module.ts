import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employeeService';
//import { MatMenuModule } from '@angular/material/menu';
//import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesInfoComponent } from './movies-info/movies-info.component';
import { MovieListComponent } from './movie-list/movie-list.component';

//here i tried to make some manu using angular materials but have failed

// const material = [
//   MatMenuModule,
//   MatButtonModule
// ]

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
    //material
  ],
  //exports: [ material ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
