import { IDates } from './dates.interface';
import { IMovie } from './movie.interface';

export interface IMoviesDTO {    
    dates: IDates,
    page: number,
    results: IMovie[],
    total_pages: number,
    total_results: number
}