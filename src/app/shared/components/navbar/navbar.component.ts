import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { AppearanceService } from '../../services/appearance.service';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThemeToggleButtonComponent } from '../theme-toggle-button/theme-toggle-button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass,RouterLink,ThemeToggleButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

  sigIsDark = computed(() => this.appearanceService.sigDarkMode());

  constructor(private appearanceService: AppearanceService){

  }

}
