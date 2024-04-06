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
  description: string | undefined;
  categoryFilter: Category | undefined;
  tagFilter: Tag | undefined;
  contact: string | undefined;

  constructor() {
    const currentDate = new Date();
    this.date = currentDate.getFullYear();
    this.author = ['Nigel Brown'];
    this.description = 'I am a Software Systems Developer student at BCIT studying Full Stack Web Development. ';
    this.contact = 'Visit my LinkedIn!';
  }

  setCategoryFilter(category: Category) {
    // Toggle category filter
    if (this.categoryFilter && this.categoryFilter.id === category.id) {
      this.categoryFilter = undefined; // Deselect category
    } else {
      this.categoryFilter = category; // Select category
    }
  }

  setTagFilter(tag: Tag) {
    // Toggle tag filter
    if (this.tagFilter && this.tagFilter.id === tag.id) {
      this.tagFilter = undefined; // Deselect tag
    } else {
      this.tagFilter = tag; // Select tag
    }
  }

  clearCategoryFilter() {
    this.categoryFilter = undefined;
  }

  clearTagFilter() {
    this.tagFilter = undefined;
  }
}
