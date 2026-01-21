import { Injectable } from '@angular/core';
import { categories } from '../sampleData/categories.data';
import { Observable } from 'rxjs';
import { Category } from '../types/category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:5001/productcategories');
  }
}
