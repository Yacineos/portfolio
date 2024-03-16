import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { AppearanceService } from './shared/services/appearance.service';
import { ThemeToggleButtonComponent } from "./shared/components/theme-toggle-button/theme-toggle-button.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [HomeViewComponent, ThemeToggleButtonComponent, NavbarComponent]
})
export class AppComponent {
  title = 'portfolio';

  readonly sigDarkMode = computed<boolean>(() => this.appearanceService.sigDarkMode());
  

  constructor(private appearanceService: AppearanceService){

  }


}
