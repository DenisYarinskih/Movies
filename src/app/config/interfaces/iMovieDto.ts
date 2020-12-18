import { IDates } from './iDates';
import { IMovie } from './iMovie';

export interface IMoviesDTO {    
    dates: IDates,
    page: number,
    results: IMovie[],
    total_pages: number,
    total_results: number
}