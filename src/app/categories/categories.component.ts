import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../model/categories';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
    constructor(private categoryService: CategoryService) { }

    categories: Category[] = [];
    getCategories(): void {
      this.categories = this.categoryService.getCategories();
    }

    ngOnInit(): void{
      this.getCategories();
    }

    @Input() categoryFilter: Category | undefined;
    @Output() newCategoryFilterEvent = new EventEmitter<Category>();
    setCategoryFilter(category: Category) {
      this.categoryFilter = category;
      this.newCategoryFilterEvent.emit(category);
  }
}
  