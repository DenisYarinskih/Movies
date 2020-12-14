import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employeeInterface';
import { EmployeeService } from '../employeeService';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  public result: IEmployee[] = [];
  //public baseImgUrl: string = 'http://image.tmdb.org/t/p/w342';

  constructor(private _employeeService: EmployeeService) { }

  public ngOnInit(): void {
    this._employeeService.getMovies().subscribe((data: any) => {
        //console.log('dddd');
        
        this.result = data.results
        console.log(this.result);
        // this.result.length = 20;
        
      })
  }

}
