
export type GameState = {
    score : number ,
    highScore : number ,
    difficulty: Difficulty ,
    health : number ,
    lost : boolean 
}

export enum Difficulty {
    easy,
    normal,
    hard,
} 

export const projectileDamage = 50 ;

// the player need to be touched X time to lose : 
export const easyModeHealth = 4 * projectileDamage ; // 4 times 
export const normalModeHealth = 2 * projectileDamage ; // 2 times 
export const hardModeHealth = 1 * projectileDamage ; // 1 time 



export const initialGameState : GameState = {
    score: 0,
    highScore: 0,
    difficulty: Difficulty.normal,
    health: normalModeHealth,
    lost: false 
}
