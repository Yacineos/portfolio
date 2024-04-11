import { ChangeDetectionStrategy, Component, EffectRef, ElementRef, Input, OnDestroy, ViewChild, effect, signal } from '@angular/core';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent implements OnDestroy {
  @ViewChild('player') player!: ElementRef ;

  private _sigPlayerPosition = signal<number>(0);

  @Input()
  get position() {
    return this._sigPlayerPosition();
  }
  set position(p: number) {
    this._sigPlayerPosition.set(p);
  }

  private effectRef?: EffectRef;

  ngOnDestroy(): void {
    this.effectRef?.destroy()
  }

  constructor(){
    this.effectRef = effect(() => {
      this.player.nativeElement.animate(
        {
          left: `${this._sigPlayerPosition()}px`,
        },{ duration: 500 , fill:"forwards" }
      );
    })
  }
}
