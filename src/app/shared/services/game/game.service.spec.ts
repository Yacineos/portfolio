import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';
import { Difficulty, Health, Velocity, initialGameState } from '../../../core/models/game';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[GameService]
    });
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('service initaliation', ()=> {
    it('sigGameState should correctly initialised', ()=> {
      expect(service.sigGameState()).toEqual(initialGameState);
    });
  })

  describe('inflict damage method', ()=> {
    it('should not inflict damage if the player have no health left ', ()=>{
      service.setHealth(0 as Health);
      expect(() => {
        service.inflictDamage();
      }).toThrowError('player have no health left , damage should not be inflicted ');
    });

    it('should inflict projectile damage', ()=> {
      service.setHealth(50 as Health);
      service.inflictDamage()
      expect(service.sigGameState().health).toEqual(0);
    });
  });

  describe('move player', ()=> {
    it('should move the player to the new position that ranges between 0 and 1 ', ()=>{
      service.movePlayer(0.4);
      expect(service.sigGameState().playerPosition).toEqual(0.4);
    });

    it('should throw an error if the position is <0 and >1 ', ()=> {
      expect(()=> {
        service.movePlayer(1.2);
      }).toThrowError(' player position should range from 0 to 1 ');
    });
  });

  describe('set difficulty', ()=> {
    it('should set the diffculty to the correct entry', () => {
      service.setDifficulty(Difficulty.hard);
      expect(service.sigGameState().difficulty).toEqual(Difficulty.hard);
    });

    it('should throw an error if the entry is not a difficulty', ()=> {
      expect(()=> {
        service.setDifficulty('test' as unknown as Difficulty);
      }).toThrowError('the entry is not a Difficulty , please enter a difficulty from (easy , normal, hard)') ;
    });

    it('should change the starting Health according to the easy mode',()=> {
      service.setDifficulty(Difficulty.easy);
      expect(service.sigGameState().health).toEqual(200);
    });
    it('should change the starting Health according to the hard mode',()=> {
      service.setDifficulty(Difficulty.hard);
      expect(service.sigGameState().health).toEqual(50);
    });
    it('should change the starting Health according to the normal mode',()=> {
      service.setDifficulty(Difficulty.normal);
      expect(service.sigGameState().health).toEqual(100);
    });

  });

  describe('high score ', () => {
    it('should correctly set the high score ',()=> {
      service.setHighScore();
      expect(service.sigGameState().score).toEqual(service.sigGameState().highScore);
    });
    it('should throw an error if the currentScore < currentHighScore', ()=> {
      jest.spyOn(service, 'sigGameState').mockImplementation(() => ({
        playerPosition: 0.5,
        score: 50, // current score
        highScore: 100, // current high score
        difficulty: Difficulty.normal,
        projectileVelocity: Velocity.Slow,
        health: 100,
        lost: false,
      }));

      expect(() => service.setHighScore()).toThrow('the current score is not superior to the current high score ');

      jest.clearAllMocks();

    });
  });

  describe('set Health', ()=> {
    it('should correctly set the health ', ()=> {
      service.setHealth(0);
      expect(service.sigGameState().health).toEqual(0);
    });
    it('should throw an error if nothing then Health is passed in parameter',()=> {
      expect(()=> {
        service.setHealth(70 as unknown as Health);
      }).toThrowError('The entered value is not a Health');
    });
  });

  describe('velocity', () => {
    it('should correctly increase from slow to medium', ()=> {
      service.increaseProjectilesVelocity();
      expect(service.sigGameState().projectileVelocity).toEqual(Velocity.Medium);
    });
    it('should correctly increase from medium to fast', ()=> {
      jest.spyOn(service, 'sigGameState').mockImplementation(() => ({
        playerPosition: 0.5,
        score: 50, // current score
        highScore: 100, // current high score
        difficulty: Difficulty.normal,
        projectileVelocity: Velocity.Medium,
        health: 100,
        lost: false,
      }));
      service.increaseProjectilesVelocity();
      expect(service.sigGameState().projectileVelocity).toEqual(Velocity.Fast);
    });
    it('should correctly increase from fast to light', ()=> {  
      jest.spyOn(service, 'sigGameState').mockImplementation(() => ({
        playerPosition: 0.5,
        score: 50, // current score
        highScore: 100, // current high score
        difficulty: Difficulty.normal,
        projectileVelocity: Velocity.Fast,
        health: 100,
        lost: false,
      }));
      service.increaseProjectilesVelocity();
      expect(service.sigGameState().projectileVelocity).toEqual(Velocity.Light);
    });
    it('should throw an error if we try to increase speed and the current is light and keep the current to light', ()=> {
      jest.spyOn(service, 'sigGameState').mockImplementation(() => ({
        playerPosition: 0.5,
        score: 50, // current score
        highScore: 100, // current high score
        difficulty: Difficulty.normal,
        projectileVelocity: Velocity.Light,
        health: 100,
        lost: false,
      }));

      expect(()=> {
        service.increaseProjectilesVelocity()
      }).toThrowError('cannot have a speed superior to Light');
      expect(service.sigGameState().projectileVelocity).toEqual(Velocity.Light);
    });
  });
});
