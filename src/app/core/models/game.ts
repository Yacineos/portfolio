export type GameState = {
    playerPosition: number, // player distance from the left border of the screen 
    score : number ,
    // timer : number ,
    highScore : number ,
    difficulty: Difficulty ,
    projectileVelocity: Velocity,
    health : Health ,
    lost : boolean 
}



export enum Difficulty {
    easy,
    normal,
    hard,
} 

export enum Velocity {
    Slow = 5,
    Medium = 10,
    Fast = 15,
    Light = 30 ,
};


export const projectileDamage = 50 ;

// the player need to be touched X time to lose : 
export const easyModeHealth : Health = 4 * projectileDamage as Health; // 4 times 
export const normalModeHealth : Health = 2 * projectileDamage as Health; // 2 times 
export const hardModeHealth: Health = 1 * projectileDamage as Health; // 1 time 

export type Health = 0 | 50 | 100 | 200 ;

// // this coefficient will be multiplied by the timer to give the score of the player 
// export const coefficientScoreEasyMode = 1;
// export const coefficientScoreNormalMode = 2;
// export const coefficientScoreHardMode = 4;


export const initialGameState : GameState = {
    playerPosition: 0.5, // init position to the center of the screen
    score: 0,
    highScore: 0,
    difficulty: Difficulty.normal,
    projectileVelocity: Velocity.Slow,
    health: normalModeHealth as Health,
    lost: false 
}
