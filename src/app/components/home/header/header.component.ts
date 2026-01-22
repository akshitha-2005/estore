import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CategoriesStoreItem } from '../services/categories.storeItem';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  faSearch = faSearch;

  constructor(public categoryStore: CategoriesStoreItem) {}
}
