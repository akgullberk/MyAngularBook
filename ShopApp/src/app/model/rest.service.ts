import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseUrl: String = "http://localhost:3500";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + "/products");
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + "/categories");
  }
}
