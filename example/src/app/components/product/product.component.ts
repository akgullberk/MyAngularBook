import { Component } from '@angular/core';
import { ProductRepository } from '../../repositories/repository.model';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  model: ProductRepository = new ProductRepository();
  disabled=false;

  getClasses(id:number): String{
    let product = this.model.getProductById(id)!;
    return (product.price! <=1000 ? "bg-info" : "bg-secondary") + " m-2 p-2 text-white";
  }

  getClassMap(id:number): Object{
    let product = this.model.getProductById(id)!;
    return {
      "bg-info": product.price! <=1000,
      "bg-secondary": product.price! > 1000,
      "text-center text-white": product.name == "Samsung S6"
    };
  }

  color: string = (this.model.getProductById(2)?.price ?? Infinity) <= 1000 ? "green" : "red";
  fontSize : string = "25px";

  getStyles(id:number){
    let product = this.model.getProductById(id)!;
    return{
      fontSize: "25px",
      color : product.price ?? Infinity <= 1000 ? "green" : "red",
    }
  }

  onSubmit($event: any) {
    $event.stopPropagation(); 

    console.log("button was clicked")
    console.log($event);

  }

  onDivClicked() {
    console.log("div was clicked");
  }

}
