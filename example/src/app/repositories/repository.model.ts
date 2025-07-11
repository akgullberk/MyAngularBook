import { SimpleDataSource } from "../datasources/datasource.model";
import { Product } from "../models/product.model";

export class ProductRepository {

    private dataSource: SimpleDataSource;
    private products: Product[];

    constructor(){
        this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getProducts().forEach(p => this.products.push(p));
    }

    getProducts(): Product[]{
        return this.products;
    }

    getProductsById(id: number): Product | undefined{ {
        return this.products.find(p => p.id == id);
    }
    }

    getProductCount(): number{
        return this.products.length;
    }
}