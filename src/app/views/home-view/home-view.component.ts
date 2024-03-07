import { Component, computed, signal } from '@angular/core';
import { AnimatedWelcomeParagraphComponent } from './animated-welcome-paragraph/animated-welcome-paragraph.component';
import { BlubComponent } from './blub/blub.component';
import { MouseTrackingService } from '../../shared/services/mouse-tracking.service';
import { Coor } from '../../core/models/types';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [AnimatedWelcomeParagraphComponent, BlubComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent {
  
  private readonly _sigMouseCoor = signal<Coor>({x:0,y:0});
  readonly sigMouseCoor = computed<Coor>(() => this._sigMouseCoor()); 

  constructor(private mouseService: MouseTrackingService){

  }
  
  setMouseCoor(coor: Coor){
    this._sigMouseCoor.set(coor);
  }

  getandUpdateMouseCoor(event: MouseEvent) {
    const coor = this.mouseService.computeMouseCoordinates(event);
    this.setMouseCoor(coor);
    //console.log(this.sigMouseCoor());
  } 

}
