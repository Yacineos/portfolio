import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppearanceService } from '../../shared/services/appearance.service';

@Component({
  selector: 'app-projects-view',
  standalone: true,
  imports: [],
  templateUrl: './projects-view.component.html',
  styleUrl: './projects-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsViewComponent {

}
