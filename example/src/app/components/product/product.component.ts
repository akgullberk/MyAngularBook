import { Component } from '@angular/core';
import { ProductRepository } from '../../repositories/repository.model';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  model: ProductRepository = new ProductRepository();

  product: Product = this.model.getProductById(1)!;
}
