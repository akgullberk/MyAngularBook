import { Component } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { CommonModule } from '@angular/common';
import { Movie } from '../movie';
import { FormsModule } from '@angular/forms';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  imports: [CommonModule, FormsModule, MovieDetailComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  title = "Movie List"
  movies: Movie[] | undefined;
  selectedMovie: Movie | undefined;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
    console.log('Seçilen:', movie);
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => {
        this.movies = movies;
      }
      );
  }
}
