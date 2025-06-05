import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoggingComponent } from './logging/logging.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoggingComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MovieApp';
}
