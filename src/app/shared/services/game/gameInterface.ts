import { Signal } from "@angular/core";
import { Difficulty, GameState, Health, Position } from "../../../core/models/game";

/* ---------------------------------------------------------------------------------------
    Projectile Game is an action-packed game where players must dodge
    projectiles that spawn randomly along the top screen’s border 
    and travel to screnn bottom border . The game’s difficulty level determines 
    the number of projectiles that spawn and their speed.
    The higher the difficulty, the more projectiles spawn,
    and the faster they move.
    Additionally, the player’s ability to withstand hits decreases 
    with increasing difficulty.
   ---------------------------------------------------------------------------------------*/

   
export interface GameInterface {

    readonly sigGameState : Signal<GameState> ;

    /*
      * function that reduce 1 projectile damage to 
      *  the player health
    */
    inflictDamage(): void ;

    /*
      *  function that update the player current position
    */
    movePlayer(newPosition: Position):void ;

    /*
      *  a function that increase the current projectiles velocity 
    */
    increaseProjectilesVelocity(): void ;


    /*
     * changes the current difficulty
     * should also update the health 
    */
    setDifficulty(difficulty: Difficulty): void ;
    
    /*
     * saves the current score to the highScore attribute if score > highScore 
     */
    setHighScore(): void ;

    
    setHealth(health: Health): void ;

    

}