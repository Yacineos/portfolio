import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';
import { Health } from '../../../core/models/game';

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

  describe('inflict damage method', ()=> {
    it('should not inflict damage if the player have no health left ', ()=>{
      service.setHealth(0 as Health);
      expect(() => {
        service.inflictDamage();
      }).toThrowError();
    });

    it('should inflict projectile damaage', ()=> {
      service.setHealth(50 as Health);
      service.inflictDamage()
      expect(service.sigGameState().health).toEqual(0);
    })
  });
});
