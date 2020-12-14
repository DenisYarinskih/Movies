import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
