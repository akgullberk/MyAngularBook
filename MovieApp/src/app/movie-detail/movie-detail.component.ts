import { Component, Input } from '@angular/core';
import { Movie } from '../movie';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  imports: [FormsModule,CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {

  @Input() movie : Movie | undefined

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

 ngOnInit() {
   this.getMovie();
 }

  getMovie(): void{
    const id  = +this.route.snapshot.paramMap.get("id")!;
    this.movieService.getMovie(id).subscribe(movie => this.movie = movie);
  }

  save():void{
    this.movieService.update(this.movie!).subscribe(() => this.location.back());
  }

}
