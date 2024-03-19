import { Component, Input, computed, signal } from '@angular/core';
import { AppearanceService } from '../../services/appearance.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle-button.component.html',
  styleUrl: './theme-toggle-button.component.css'
})
export class ThemeToggleButtonComponent {
  
  sigIsDark = computed(() => this.appearanceService.sigDarkMode());

  constructor(private appearanceService:AppearanceService){

  }

  toggleTheme(){
    this.appearanceService.toggleTheme()
  }
}
