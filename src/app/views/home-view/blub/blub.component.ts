import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  signal,
  AfterViewInit,
  effect,
  OnDestroy,
  EffectRef,
} from '@angular/core';
import { Coor } from '../../../core/models/types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blub',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blub.component.html',
  styleUrl: './blub.component.css',
})
export class BlubComponent implements AfterViewInit, OnDestroy {

  @ViewChild('blub') bulb!: ElementRef;

  private _sigMouse = signal<Coor>({ x: 0, y: 0 });
  @Input()
  get mouseCoor() {
    return this._sigMouse();
  }
  set mouseCoor(c: Coor) {
    this._sigMouse.set(c);
  }

  @Input({required: true}) isTouchScreen : boolean = false ;

  private effectRef?: EffectRef;

  ngOnDestroy(): void {
      this.effectRef?.destroy()
  }
  
  ngAfterViewInit() {
  }

  constructor() {
    this.effectRef = effect(() => {
      if (this.bulb && this.mouseCoor && !this.isTouchScreen) {
        this.bulb.nativeElement.animate(
          {
            left: `${this.mouseCoor.x}px`,
            top: `${this.mouseCoor.y}px`,
          },
          { duration: 3000 , fill:"forwards" }
        );
      }
    });
 
  }

  touchScreen(){
    return this.isTouchScreen;
  }
}
