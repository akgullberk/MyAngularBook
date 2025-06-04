import { Component } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies',
  imports: [MovieComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  title = "Movie List"

  getTitle(){
    return this.title
  }

  movie:Movie = {
    id:1,
    name: "Movie Name"
  }

  
}
