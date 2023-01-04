import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseProducts } from '../models/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ResponseProducts> {
    return this.http.get<ResponseProducts>(this.apiUrl + '/products');
  }
}
