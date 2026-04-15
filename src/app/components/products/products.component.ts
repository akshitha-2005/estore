import { ProductsService } from '../home/services/product/products.service';
import { Component } from '@angular/core';
import { Product } from '../home/types/products.type';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from '../ratings/ratings.component';
import { ProductsStoreItem } from '../home/services/product/products.storeItem';
import { RouterLink } from '@angular/router';
import { CartStoreItem } from '../home/services/cart/cart.storeItem';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RatingsComponent, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  constructor(
    public productsStoreItem: ProductsStoreItem,
    private cart: CartStoreItem,
  ) {}

  addToCart(product: Product) {
    this.cart.addProduct(product);
  }
}
