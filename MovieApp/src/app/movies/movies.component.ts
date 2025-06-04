import { Component } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { CommonModule } from '@angular/common';
import { Movies } from '../movie.datasource';

@Component({
  selector: 'app-movies',
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  title = "Movie List"
  movies= Movies;

  
}
