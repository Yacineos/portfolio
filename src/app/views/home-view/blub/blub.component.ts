import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Coor } from '../../../core/models/types';

@Component({
  selector: 'app-blub',
  standalone: true,
  imports: [],
  templateUrl: './blub.component.html',
  styleUrl: './blub.component.css'
})
export class BlubComponent {
  @ViewChild("blub") bulb !: ElementRef ;
  
  @Input({required: true}) color!: string;
  @Input() mouseCoor !: Coor ;

  ngOnChanges() {
    if (this.bulb && this.mouseCoor) {
      this.bulb.nativeElement.style.left = `${this.mouseCoor.x}px`;
      this.bulb.nativeElement.style.top = `${this.mouseCoor.y}px`;
    }
  }

}
