import {Injectable} from 'angular2/core';
import {Player} from '../model/player/player.model';


@Injectable()
export class PlayerService {

  player: Player;

  constructor() {
    this.player = new Player(1, 'John', 'john@k.com');
  }

  getLastAddedPlayer() {
    return this.player;
  }

  setLastAddedPlayer(player: Player) {
    this.player = player;
  }

}
