import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectFilterPipe } from '../project-filter.pipe';

import { Category } from '../model/categories';
import { Tag } from '../model/tags';

import { ProjectService } from '../project.service';
import { Project } from '../model/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectFilterPipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  constructor(private projectService: ProjectService) { }

  projects: Project[] = [];
  getProjects(): void {
    this.projects = this.projectService.getProjects();
  }

  ngOnInit(){
    this.getProjects();
  }

  @Input() categoryFilter: Category | undefined;
  @Output() newCategoryFilterEvent = new EventEmitter<Category>();
  @Input() tagFilter: Tag | undefined;
  @Output() newTagFilterEvent = new EventEmitter<Tag>();

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
    this.newCategoryFilterEvent.emit(category);
  }

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
    this.newTagFilterEvent.emit(tag);
  }
}
