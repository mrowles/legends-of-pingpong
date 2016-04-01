import {Player} from '../../model/player/player.model';

export class Match {

  public player1: Player;
  public player2: Player;

  private id: Number;

  constructor(id: number, player1: Player, player2: Player) {
    this.id = id;
    this.player1 = player1;
    this.player2 = player2;
  }
}
