import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ShopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Shop Application';
}
