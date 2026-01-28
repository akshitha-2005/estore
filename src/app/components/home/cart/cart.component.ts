import { Component } from '@angular/core';
import { CartItem } from '../types/cart.type';
import { Router } from '@angular/router';
import { CartStoreItem } from '../services/cart/cart.storeItem';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(
    public cartStore: CartStoreItem,
    private router: Router,
  ) {}

  navigateToHome(): void {
    this.router.navigate(['home/products']);
  }
}
