import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { LoggingComponent } from './logging/logging.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MoviesComponent,LoggingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MovieApp';
}
