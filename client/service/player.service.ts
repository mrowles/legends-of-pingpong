import {Injectable} from 'angular2/core';
import {Player} from '../model/player/player.model';


@Injectable()
export class PlayerService {

  player: Player;

  getLastAddedPlayer() {
    return this.player;
  }

  setLastAddedPlayer(player: Player) {
    this.player = player;
  }

  clearLastAddedPlayer() {
    this.player =  null;
  }
}
