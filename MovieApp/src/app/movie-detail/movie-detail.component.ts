import { Component, Input } from '@angular/core';
import { Movie } from '../movie';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  imports: [FormsModule,CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {

  @Input() movie : Movie | undefined

}
