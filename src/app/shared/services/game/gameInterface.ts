import { Signal } from "@angular/core";
import { GameState } from "../../../core/models/game";

/* ---------------------------------------------------------------------------------------
    Projectile Game is an action-packed game where players must dodge
    projectiles that spawn randomly along the screen’s borders and travel 
    in random directions. The game’s difficulty level determines 
    the number of projectiles that spawn and their speed.
    The higher the difficulty, the more projectiles spawn,
    and the faster they move.
    Additionally, the player’s ability to withstand hits decreases 
    with increasing difficulty.
   ---------------------------------------------------------------------------------------*/

   
export interface GameInterface {

    readonly sigGameState : Signal<GameState> ;


}