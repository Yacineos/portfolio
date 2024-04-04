import { Injectable, computed, signal } from '@angular/core';
import { Difficulty, GameState, Health, Position, initialGameState, projectileDamage } from '../../../core/models/game';
import { GameInterface } from './gameInterface';

@Injectable({
  providedIn: 'root'
})
export class GameService implements GameInterface{

  private readonly _sigGameState = signal<GameState>(initialGameState);
  readonly sigGameState = computed<GameState>(()=> this._sigGameState());

  constructor() { }

  inflictDamage(): void {
    const currentHealth = this.sigGameState().health ;
    const newHealth =  currentHealth - projectileDamage ;
    if (newHealth < 0) {
      throw new Error("health shouldn't be inferior to 0");
    }
    this._sigGameState.update((s)=>({...s,health: newHealth as Health}));
  }

  movePlayer(newPosition: Position): void {
      
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
