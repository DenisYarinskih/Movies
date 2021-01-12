import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-movies-info',
  templateUrl: './movies-info.component.html',
  styleUrls: ['./movies-info.component.scss']
})
export class MoviesInfoComponent {
  @Input() title: string;
}
