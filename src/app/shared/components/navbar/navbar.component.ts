import { Component, computed } from '@angular/core';
import { AppearanceService } from '../../services/appearance.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  sigIsDark = computed(() => this.appearanceService.sigDarkMode());

  constructor(private appearanceService: AppearanceService){

  }

}
