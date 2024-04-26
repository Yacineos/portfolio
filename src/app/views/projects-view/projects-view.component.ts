import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppearanceService } from '../../shared/services/appearance.service';
import { Project } from '../../core/models/project';
import { TileComponent } from './tile/tile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-view',
  standalone: true,
  imports: [TileComponent,CommonModule],
  templateUrl: './projects-view.component.html',
  styleUrl: './projects-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsViewComponent {
    projects_mock: Project[] = [
      {
        title: "project1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptates perferendis ratione ad consequuntur perspiciatis ducimus ex accusantium, doloremque hic commodi itaque. Voluptate saepe aspernatur, totam nihil numquam tempora veritatis?",
        imageUrl: "https://img.freepik.com/free-vector/creative-abstract-quantum-illustration_23-2149236239.jpg"
      },
      {
        title: "project2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptates perferendis ratione ad consequuntur perspiciatis ducimus ex accusantium, doloremque hic commodi itaque. Voluptate saepe aspernatur, totam nihil numquam tempora veritatis?",
        imageUrl: "https://img.freepik.com/premium-vector/laptop-with-holographic-display-vector-design_1045156-1140.jpg"
      },
      {
        title: "project3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptates perferendis ratione ad consequuntur perspiciatis ducimus ex accusantium, doloremque hic commodi itaque. Voluptate saepe aspernatur, totam nihil numquam tempora veritatis?",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNaUxOHnxA1f7b4esQupkGqjzA0O6F7otRjqdwIL53A&s"
      },
      {
        title: "project4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptates perferendis ratione ad consequuntur perspiciatis ducimus ex accusantium, doloremque hic commodi itaque. Voluptate saepe aspernatur, totam nihil numquam tempora veritatis?",
        imageUrl: "https://previews.123rf.com/images/karpenkoilia/karpenkoilia1607/karpenkoilia160700162/60439496-line-web-concept-for-computer-science-vector-banner-for-education-open-path.jpg"
      }
    ]; 
}
