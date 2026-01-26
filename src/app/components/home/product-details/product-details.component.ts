import { Component } from '@angular/core';
import { RatingsComponent } from '../../ratings/ratings.component';

@Component({
  selector: 'app-product-details',
  imports: [RatingsComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {}
