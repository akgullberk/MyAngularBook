import { Component } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logging',
  imports: [CommonModule],
  templateUrl: './logging.component.html',
  styleUrl: './logging.component.css'
})
export class LoggingComponent {

  constructor(public loggingService: LoggingService) { }

}
