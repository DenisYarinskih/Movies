export class MovieHelper {
    getImage(posterPath: string) {
        return `http://image.tmdb.org/t/p/w342${posterPath}`;
    }   
}