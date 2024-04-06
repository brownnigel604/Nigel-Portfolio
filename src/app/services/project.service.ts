import { Injectable } from '@angular/core';
import { Project } from '../model/projects';
import { PROJECTS } from '../data/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor() { }
  getProjects(): Project[] {
    return PROJECTS;
  }
  getProject(id: number): Project {
    return PROJECTS.find((project) => project.id === id)!;
  }
}
