export class MovieHelper {
    static getImage(posterPath: string): string {
        return `http://image.tmdb.org/t/p/w342${posterPath}`;
    }   
}