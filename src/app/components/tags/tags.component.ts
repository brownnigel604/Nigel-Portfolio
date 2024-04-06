import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagService } from '../../services/tag.service';
import { Tag } from '../../model/tags';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  constructor(private tagService: TagService) { }

  tags: Tag[] = [];

  getTags(): void {
    this.tags = this.tagService.getTags();
  }

  ngOnInit(){
    this.getTags();
  }

  @Input() tagFilter: Tag | undefined;
  @Output() newTagFilterEvent = new EventEmitter<Tag>();

  setTagFilter(tag: Tag): void {
    this.tagFilter = tag;
    this.newTagFilterEvent.emit(tag); // Emit the tag filter to the parent component
  }
}
