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

@Component({
  selector: 'app-blub',
  standalone: true,
  imports: [],
  templateUrl: './blub.component.html',
  styleUrl: './blub.component.css',
})
export class BlubComponent implements AfterViewInit, OnDestroy {
  @ViewChild('blub') bulb!: ElementRef;

  @Input({ required: true }) color!: string;

  private _sigMouse = signal<Coor>({ x: 0, y: 0 });
  @Input()
  get mouseCoor() {
    return this._sigMouse();
  }
  set mouseCoor(c: Coor) {
    this._sigMouse.set(c);
  }

  private effectRef?: EffectRef;
  ngOnDestroy(): void {
      this.effectRef?.destroy()
  }
  
  ngAfterViewInit() {
  }

  constructor() {
    this.effectRef = effect(() => {
      if (this.bulb && this.mouseCoor) {
        this.bulb.nativeElement.animate(
          {
            left: `${this.mouseCoor.x}px`,
            top: `${this.mouseCoor.y}px`,
          },
          { duration: 3000 , fill:"forwards" }
        );
        //this.bulb.nativeElement.style.top = `${this.mouseCoor.y}px`;
      }
    });
  }
}
