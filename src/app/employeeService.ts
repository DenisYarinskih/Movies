import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employeeInterface';

@Injectable()

export class EmployeeService {

    private _url: string = "http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c";

    constructor(private http: HttpClient){}

    getMovies(): Observable<IEmployee[]>{
        return this.http.get<IEmployee[]>(this._url);
    }

}