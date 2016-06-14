import {Opponent} from './opponent.model';

export class Match {
  private opponent: Array<Opponent>;
  private won: boolean;
  private currentOpponentNumber: number;

  constructor(opponent: Array<Opponent>) {
    this.opponent = opponent;
    this.won = false;
    this.currentOpponentNumber = 0;
  }

  public addOpponent(opponent: Opponent): void {
    if (this.currentOpponentNumber === 2) {
      console.log('Cannot add more than two players');
      return;
    }

    if (this.containsPlayer(0, opponent) || this.containsPlayer(1, opponent)) {
      console.log('Cannot add same player twice');
      return;
    }

    this.opponent[this.currentOpponentNumber] = opponent;
    this.resetCurrentOpponentNumber();

  }

  public getOpponent(index: number): Opponent {
    return this.opponent[index];
  }

  public removeOpponent(opponentNumber: number): void {
    this.opponent[opponentNumber] = undefined;
    this.resetCurrentOpponentNumber();
  }

  private containsPlayer(playerNumber: number, opponent: Opponent): boolean {
    if (this.opponent[playerNumber] !== undefined && this.opponent[playerNumber].getPlayer() === opponent.getPlayer()) {
      return true;
    }
    return false;
  }

  private resetCurrentOpponentNumber(): void {
    if (this.opponent[0] === undefined) {
      this.currentOpponentNumber = 0;
    } else if (this.opponent[1] === undefined) {
      this.currentOpponentNumber = 1;
    } else {
      this.currentOpponentNumber = 2;
    }
  }
}
