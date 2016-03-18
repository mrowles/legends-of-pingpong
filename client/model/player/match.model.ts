import {Player} from '../../model/player/player.model';

export class Match {
  private id: Number;
  private playerA: Player;
  private playerB: Player;

  constructor(id: number, playerA: Player, playerB: Player) {
    this.id = id;
    this.playerA = playerA;
    this.playerB = playerB;
  }
}
