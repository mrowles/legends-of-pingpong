import {Player} from '../model/player/player.model';

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
