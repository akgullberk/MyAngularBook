import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  movies: Movie[] = [];
  movieLength!: number;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(movies =>{ 
      this.movies = movies.slice(0, 12);
      this.movieLength = movies.length;
    
    });
  }
}
