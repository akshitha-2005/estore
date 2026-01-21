import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../types/category';

@Component({
  selector: 'app-catnavigation',
  imports: [],
  templateUrl: './catnavigation.component.html',
  styleUrl: './catnavigation.component.css',
})
export class CatnavigationComponent {
  categories: Category[] = [];
  constructor(categoryService: CategoryService) {
    categoryService
      .getAllCategories()
      .subscribe(
        (categories) =>
          (this.categories = categories.filter(
            (category) => category.parent_category_id === null,
          )),
      );
  }
}
