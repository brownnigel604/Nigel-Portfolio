import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectFilterPipe } from '../../pipes/project-filter.pipe';

import { Category } from '../../model/categories';
import { Tag } from '../../model/tags';

import { ProjectService } from '../../services/project.service';
import { Project } from '../../model/projects';

import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectFilterPipe, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{
  constructor(
    private projectService: ProjectService, 
    private router: Router,
    private route: ActivatedRoute
  ) {}

  projects: Project[] = [];
  getProjects(): void {
    this.projectService
      .getProjects()
      .subscribe((projects) => this.projects = projects)
  }

  getProjectsByCategory(): void {
    const categorySlug = String(this.route.snapshot.paramMap.get('slug'));
    this.projectService
      .getProjectsByCategory(categorySlug)
      .subscribe((data) => (this.projects = data))
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      const segment: string = this.route.snapshot.url[1]?.path;
      if (segment === 'categories') {
        this.getProjectsByCategory();
      } else {
        this.getProjects();
      }
    })
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

  selectedProject?: Project;

  @Output() newSelectedProjectEvent = new EventEmitter<Project>();

  setSelectedProject(project: Project): void {
    this.newSelectedProjectEvent.emit(project);
    this.router.navigate(['/projects', project.id]);
  }
}
