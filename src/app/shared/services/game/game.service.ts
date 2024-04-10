  import { Injectable, computed, signal } from '@angular/core';
  import { Difficulty, GameState, Health, Velocity, easyModeHealth, hardModeHealth, initialGameState, normalModeHealth, projectileDamage } from '../../../core/models/game';
  import { GameInterface } from './gameInterface';

  @Injectable({
    providedIn: 'root'
  })
  export class GameService implements GameInterface{

    private readonly _sigGameState = signal<GameState>(initialGameState);
    readonly sigGameState = computed<GameState>(()=> this._sigGameState());

    constructor() { }

    inflictDamage(): void {
    
      if(this.sigGameState().health <= 0){
      throw Error('player have no health left , damage should not be inflicted ');
    }
    const currentHealth = this.sigGameState().health;
    const newHealthAfterDamage = currentHealth - 50 ;

      this._sigGameState.update((gs) => ({
      ...gs,
      health: newHealthAfterDamage as Health
    }));

    }

    movePlayer(newPosition: number): void {
        
      if(newPosition<0 || newPosition > 1){
        throw Error(' player position should range from 0 to 1 ');
      }

      this._sigGameState.update((gs)=> ({
        ...gs,
        playerPosition: newPosition,
      }))
    }

    increaseProjectilesVelocity(): void {
      if(this.sigGameState().projectileVelocity === Velocity.Light){
        throw Error('cannot have a speed superior to Light');
      }

      if(this.sigGameState().projectileVelocity === Velocity.Slow){
        this._sigGameState.update((gs)=> ({
          ...gs,
          projectileVelocity: Velocity.Medium
        }));
        setInterval(()=> {},1000);
        return ;
      }
      if(this.sigGameState().projectileVelocity === Velocity.Medium){
        this._sigGameState.update((gs)=> ({
          ...gs,
          projectileVelocity: Velocity.Fast
        }));
        console.log(this._sigGameState().projectileVelocity);
        console.log(this.sigGameState().projectileVelocity);
        setInterval(()=> {},1000);
        return ;
      }
      if(this.sigGameState().projectileVelocity === Velocity.Fast){
        this._sigGameState.update((gs)=> ({
          ...gs,
          projectileVelocity: Velocity.Light
        }));
        setInterval(()=> {},1000);
        return ;
      }
    }

    setDifficulty(difficulty: Difficulty): void {
        if(!Object.values(Difficulty).includes(difficulty)){
          throw Error('the entry is not a Difficulty , please enter a difficulty from (easy , normal, hard)');
        }

        if(difficulty === Difficulty.easy){
          this._sigGameState.update( (gs)=> ({
            ...gs,
            difficulty,
            health: easyModeHealth
          }));
        }

        if(difficulty === Difficulty.normal){
          this._sigGameState.update( (gs)=> ({
            ...gs,
            difficulty,
            health: normalModeHealth
          }));
        }

        if(difficulty === Difficulty.hard){
          this._sigGameState.update( (gs)=> ({
            ...gs,
            difficulty,
            health: hardModeHealth
          }));
        }
        
        
    }

    setHighScore(): void {
        if(this.sigGameState().score < this.sigGameState().highScore ){
          throw Error('the current score is not superior to the current high score ');
        }

        this._sigGameState.update((gs)=> ({
          ...gs,
          highScore: gs.score
        }));
    }

    setHealth(health: Health): void {
      if(health !== 0 && health !== easyModeHealth && health !== normalModeHealth && health !== hardModeHealth){
        throw Error('The entered value is not a Health');
      }
      this._sigGameState.update( (s) => ({...s,health}))
    }

    
  }
