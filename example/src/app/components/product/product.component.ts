import { Component } from '@angular/core';
import { ProductRepository } from '../../repositories/repository.model';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [CommonModule,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  model: ProductRepository = new ProductRepository();

  productName: string | undefined = this.model.getProductsById(1)?.name;


}
