import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { CategoryRepository } from '../model/category.repository';
import { Product } from '../model/product.model';
import { Category } from '../model/category.model';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-shop',
  imports: [NavbarComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository
  ){
  }

  getProducts(): Product[]  {
    return this.productRepository.getProducts();
  } 

  getCategories(): Category[] {
    return this.categoryRepository.getCategories();
  }
}
