import { Injectable,  } from "@angular/core";
import { Product } from "./product.model";
import { RestService } from "./rest.service";

@Injectable({
    providedIn: 'root'
})
export class ProductRepository {
    private products: Product[] = [];

    constructor(private restService: RestService) {
        this.restService
         .getProducts()
         .subscribe(products => this.products = products);
        
    }

    getProduct(id :number): Product | undefined {
        return this.products.find(i => i.id == id);
    }

    getProducts(): Product[] {
        return this.products;
    }

}