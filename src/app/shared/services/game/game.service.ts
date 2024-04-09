import { Injectable, computed, signal } from '@angular/core';
import { Difficulty, GameState, Health, initialGameState, projectileDamage } from '../../../core/models/game';
import { GameInterface } from './gameInterface';

@Injectable({
  providedIn: 'root'
})
export class GameService implements GameInterface{

  private readonly _sigGameState = signal<GameState>(initialGameState);
  readonly sigGameState = computed<GameState>(()=> this._sigGameState());

  constructor() { }

  inflictDamage(): void {
   
  }

  movePlayer(newPosition: number): void {
      
  }

  increaseProjectilesVelocity(): void {
      
  }

  setDifficulty(difficulty: Difficulty): void {
      
  }

  setHighScore(): void {
      
  }

  setHealth(health: Health): void {
    this._sigGameState.update( (s) => ({...s,health}))
  }

  
}
