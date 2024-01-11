import { Component,HostBinding } from '@angular/core';
import { TagListComponent } from '../tag-list/tag-list.component';

@Component({
  selector: 'app-tag-sidebar',
  standalone: true,
  imports: [TagListComponent],
  templateUrl: './tag-sidebar.component.html',
  styleUrl: './tag-sidebar.component.css'
})
export class TagSidebarComponent {
  @HostBinding('class') class='tag-sidebar'
  
  tag=['enim','repellat','est','eos'];


}
