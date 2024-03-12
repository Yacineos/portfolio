import { Injectable } from '@angular/core';
import { Coor } from '../../core/models/types';

@Injectable({
  providedIn: 'root'
})
export class MouseTrackingService {

  isTouchScreen : boolean = false ; 

  constructor() { 
    this.detectTouchScreen();
  }

  computeMouseCoordinates(e : MouseEvent): Coor{
    return {x: e.clientX , y: e.clientY};
  }

  detectTouchScreen(){
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.match(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i)) {
      this.isTouchScreen = true;
    }
  }

}
