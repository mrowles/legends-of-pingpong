import {PlayerStats} from './playerStats';

export class Player {
  private id: number;
  private name: string;
  private email: string;
  private playerStats: PlayerStats;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.playerStats = new PlayerStats();

    this.playerStats.win = 0;
    this.playerStats.loss = 0;
    this.playerStats.forfeit = 0;
    this.playerStats.for = 0;
    this.playerStats.against = 0;
  }
}
