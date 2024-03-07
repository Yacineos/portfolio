import { Injectable } from '@angular/core';
import { Coor } from '../../core/models/types';

@Injectable({
  providedIn: 'root'
})
export class MouseTrackingService {

  constructor() { }

  computeMouseCoordinates(e : MouseEvent): Coor{
    return {x: e.clientX , y: e.clientY};
  }
}
