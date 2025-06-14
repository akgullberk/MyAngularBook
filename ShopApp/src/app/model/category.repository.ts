import { Injectable } from "@angular/core";
import { RestService } from "./rest.service";
import { Category } from "./category.model";

@Injectable()
export class CategoryRepository {
    private categories: Category[] = [];

    constructor(private restService: RestService) {
        
    }

    ngOnInit() {
        this.restService
         .getCategories()
         .subscribe(categories => this.categories = categories);
    }

    getCategory(id :number): Category | undefined {
        return this.categories.find(i => i.id == id);
    }

}