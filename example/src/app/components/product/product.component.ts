import { Component } from '@angular/core';
import { ProductRepository } from '../../repositories/repository.model';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from '../../summary.pipe';

@Component({
  selector: 'app-product',
  imports: [CommonModule,FormsModule,SummaryPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  text="Lorem ipsum dolor sit, amet consectetur adipisicing"

}
