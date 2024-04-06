import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';

import { Category } from './model/categories';
import { Tag } from './model/tags';

import { CommonModule } from '@angular/common';
import { ProjectFilterPipe } from './project-filter.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProjectFilterPipe, ProjectsComponent, CategoriesComponent, TagsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-A01';
  date: number | undefined;
  author: string[] = [];
  categoryFilter: Category | undefined;
  tagFilter: Tag | undefined;

  constructor() {
    const currentDate = new Date();
    this.date = currentDate.getFullYear();
    this.author = ['Nigel'];
  }

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
  }

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
  }

  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }

  clearCategoryFilter() {
    this.categoryFilter = undefined;
  }

  clearTagFilter() {
    this.tagFilter = undefined;
  }
}
