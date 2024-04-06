import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../model/projects';
import { PROJECTS } from '../data/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor() {}
  getProjects(): Observable<Project[]> {
    const projects = of(PROJECTS); // Fix: Wrap PROJECTS with the of operator
    return projects; // Fix: Return the projects Observable
  }
  getProject(id: number): Project {
    return PROJECTS.find((project) => project.id === id)!;
  }
  getProjectsByCategory(slug: string): Observable<Project[]> {
    const projects = PROJECTS.filter(
      (project) => project.category?.slug === slug
    )!;
    return of (projects);
  }
}
