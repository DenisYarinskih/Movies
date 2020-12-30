import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfoAboutMovieComponent } from './info-about-movie/info-about-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviesComponent } from './movies.component';

const routes = [
    {path: '' , component: MoviesComponent, children: [
        {path: '', component: MovieListComponent},
        {path: ':id', component: InfoAboutMovieComponent},
    ]},
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class MoviesRoutingModule {}


