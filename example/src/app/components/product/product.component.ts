import { Component } from '@angular/core';
import { ProductRepository } from '../../repositories/repository.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  model: ProductRepository = new ProductRepository();
}
