import { Component } from '@angular/core';
import { AppearanceService } from '../../services/appearance.service';

@Component({
  selector: 'app-theme-toggle-button',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle-button.component.html',
  styleUrl: './theme-toggle-button.component.css'
})
export class ThemeToggleButtonComponent {

  constructor(private appearanceService:AppearanceService){

  }

  toggleTheme(){
    this.appearanceService.toggleTheme()
  }
}
