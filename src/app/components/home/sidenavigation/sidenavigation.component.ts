import { CategoryService } from '../services/category/category.service';
import { Category } from '../types/category';
import { Component, inject } from '@angular/core';
import { CategoriesStoreItem } from '../services/category/categories.storeItem';

@Component({
  selector: 'app-sidenavigation',
  imports: [],
  templateUrl: './sidenavigation.component.html',
  styleUrl: './sidenavigation.component.css',
})
export class SidenavigationComponent {
  private categoryStore = inject(CategoriesStoreItem);

  readonly categories = this.categoryStore.categories;

  getCategories(parentCategoryId?: number): Category[] {
    return this.categories().filter((category) =>
      parentCategoryId
        ? category.parent_category_id === parentCategoryId
        : category.parent_category_id === null,
    );
  }
}
