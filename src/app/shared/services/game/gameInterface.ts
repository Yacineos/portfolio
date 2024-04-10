import { Signal } from '@angular/core';
import {
  Difficulty,
  GameState,
  Health,
} from '../../../core/models/game';

/* ---------------------------------------------------------------------------------------
    Projectile Game is an action-packed game where players must dodge
    projectiles that spawn randomly along the top screen’s border 
    and travel to screen bottom border . In Projectile Game,
    difficulty scales with the player's score,
    increasing the spawn rate and speed of projectiles.
    This ensures a progressively challenging experience,
    demanding better dodging skills as the game advances.
    Additionally, the player’s ability to withstand hits decreases 
    with increasing difficulty.
   ---------------------------------------------------------------------------------------*/

export interface GameInterface {
  readonly sigGameState: Signal<GameState>;

  /*
   * function that reduce 1 projectile damage to
   *  the player health
   */
  inflictDamage(): void;

  /*
   *  function that update the player current position
   */
  movePlayer(newPosition: number): void;

  /*
   *  a function that increase the current projectiles velocity
   */
  increaseProjectilesVelocity(): void;

  /*
   * changes the current difficulty
   * should also update the health
   * @Param difficulty : Health
   */
  setDifficulty(difficulty: Difficulty): void;

  /*
   * saves the current score to the highScore attribute if score > highScore
   */
  setHighScore(): void;

  /*
   * sets the current health to health
   * @param health : Health
   */
  setHealth(health: Health): void;
}
