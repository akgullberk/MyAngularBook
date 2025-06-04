import { Component } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { CommonModule } from '@angular/common';
import { Movies } from '../movie.datasource';
import { Movie } from '../movie';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies',
  imports: [CommonModule,FormsModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  title = "Movie List"
  movies= Movies;
  selectedMovie : Movie | undefined;

  onSelect(movie:Movie) : void{
    this.selectedMovie = movie;
    console.log('Seçilen:', movie);
  }
}
