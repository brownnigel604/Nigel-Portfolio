import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../model/projects';
import { Tag } from '../model/tags';

@Pipe({
  name: 'projectFilter',
  standalone: true
})
export class ProjectFilterPipe implements PipeTransform {

  transform(projects: Project[], tag: Tag | undefined): Project[] {
    let filteredProjects = [];
    if (tag) {
      filteredProjects = projects.filter((project) => {
        return JSON.stringify(project.tags).indexOf(JSON.stringify(tag)) + 1;
      });
    } else {
      filteredProjects = projects;
    }
    return filteredProjects;
  }

}
