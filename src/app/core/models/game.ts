export type GameState = {
    playerPosition: Position,
    score : number ,
    // timer : number ,
    highScore : number ,
    difficulty: Difficulty ,
    projectileVelocity: Velocity,
    health : number ,
    lost : boolean 
}

// player distance from the left border of the screen 
export type Position = `${number}px`;

export enum Difficulty {
    easy,
    normal,
    hard,
} 

export type Velocity = number ;

export const projectileDamage = 50 ;

// the player need to be touched X time to lose : 
export const easyModeHealth = 4 * projectileDamage ; // 4 times 
export const normalModeHealth = 2 * projectileDamage ; // 2 times 
export const hardModeHealth = 1 * projectileDamage ; // 1 time 

// // this coefficient will be multiplied by the timer to give the score of the player 
// export const coefficientScoreEasyMode = 1;
// export const coefficientScoreNormalMode = 2;
// export const coefficientScoreHardMode = 4;


export const initialGameState : GameState = {
    playerPosition: '150px',
    score: 0,
    highScore: 0,
    difficulty: Difficulty.normal,
    projectileVelocity: 1,
    health: normalModeHealth,
    lost: false 
}
