import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.models';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent {
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((prod) => console.log(prod));
  }
}
