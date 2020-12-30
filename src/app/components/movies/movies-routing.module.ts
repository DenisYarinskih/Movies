import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviesComponent } from './movies.component';

const routes = [
    {path: '' , component: MoviesComponent, children: [
        {path: '', component: MovieListComponent}
    ]}
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