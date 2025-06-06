import { Component } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { CommonModule } from '@angular/common';
import { Movie } from '../movie';
import { FormsModule } from '@angular/forms';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { MovieService } from '../services/movie.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movies',
  imports: [CommonModule, FormsModule, MovieDetailComponent,RouterModule],
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

  add(name:String,imageUrl:String,description:String) : void{
    this.movieService.add({
      name:name,
      description:description,
      imageUrl:imageUrl
    } as Movie).subscribe(movie => this.movies?.push(movie));
  }

  delete(movie:Movie) : void{
    this.movies = this.movies?.filter(m => m !== movie);
    this.movieService.delete(movie).subscribe();
  }
}
