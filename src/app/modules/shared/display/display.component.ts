import { Component } from '@angular/core';
import { Product } from 'src/app/models/products.interface';
import { ProductsService } from 'src/app/services/products.models';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent {
  responseProducts: Product[] | undefined;
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((prod) => (this.responseProducts = prod.products));
  }
}
