import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppearanceService {

  private readonly _sigDarkMode = signal<boolean>(false);
  readonly sigDarkMode = computed<boolean>(() => this._sigDarkMode());

  toggleTheme(){
    this._sigDarkMode.update((currentMode) => !currentMode);
  }

}
