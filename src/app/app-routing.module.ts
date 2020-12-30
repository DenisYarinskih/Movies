import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';

const routes = [
    {path: 'movies', loadChildren: () => import('./components/movies/movies.module').then(m => m.MoviesModule)},       
    {path: '', redirectTo: '/movies', pathMatch: 'full'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}