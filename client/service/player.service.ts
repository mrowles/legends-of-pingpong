import {Injectable} from 'angular2/core';
import {Player} from '../model/player/player.model';

@Injectable()
export class PlayerService {

  private player: Player;

  public getLastAddedPlayer(): Player {
    return this.player;
  }

  public setLastAddedPlayer(player: Player): void {
    this.player = player;
  }

  public clearLastAddedPlayer(): void {
    this.player = undefined;
  }
}
