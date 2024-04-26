import { ChangeDetectionStrategy, Component, Input, computed, inject } from '@angular/core';
import { PlayerComponent } from './player/player.component';
import { GameService } from '../../shared/services/game/game.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [PlayerComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent {

  readonly gameService = inject(GameService);
  readonly windowWidth = window.innerWidth;
  readonly playerPositionRelativeToScreen = computed<number>(()=> this.gameService.sigGameState().playerPosition*this.windowWidth);

  updatePlayerPositionMouse(event : MouseEvent){
    this.gameService.movePlayer((event.x)/this.windowWidth);
  }
  updatePlayerPositionTouch(event: TouchEvent){
    this.gameService.movePlayer((event.touches[0].clientX)/this.windowWidth);
  }

  

}
