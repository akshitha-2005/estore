import { Component, output, signal } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CategoriesStoreItem } from '../services/category/categories.storeItem';
import { SearchKeyword } from '../types/searchKeyword.type';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CartStoreItem } from '../services/cart/cart.storeItem';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  faSearch = faSearch;
  readonly searchClicked = output<SearchKeyword>();
  displaySearch = signal(true);

  constructor(
    public categoryStore: CategoriesStoreItem,
    private router: Router,
    public cart: CartStoreItem,
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.displaySearch.set(event.url === '/home/products');
      });
  }

  onClickSearch(keyword: string, categoryId: string): void {
    this.searchClicked.emit({
      categoryId: parseInt(categoryId),
      keyword: keyword,
    });
  }

  navigateToCart(): void {
    this.router.navigate(['home/cart']);
  }
}
