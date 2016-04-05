import {Opponent} from '../../model/match/opponent.model';

export class Match {
  private opponent: Array<Opponent>;
  private won: boolean;

  constructor(opponent: Array<Opponent>) {
    this.opponent = opponent;
    this.won = false;
  }

  public addOpponent(opponent: Opponent): void {
    if (this.size() > 1) {
      console.log('Cannot add more than two players');
      return;
    }

    if (this.size() > 0 && this.opponent[0].getPlayer() === opponent.getPlayer()) {
      console.log('Cannot add same player twice');
      return;
    }

    this.opponent.push(opponent);
  }

  public getOpponent(index: number): Opponent {
    return this.opponent[index];
  }

  private size(): number {
    return this.opponent.length;
  }
}
