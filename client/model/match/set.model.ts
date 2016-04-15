export class Set {
  private score: number;
  private won: boolean;

  constructor(score: number, won: boolean) {
    this.score = score;
    this.won = won;
  }

  public getScore(): number {
    return this.score;
  }

  public setWon(won: boolean): void {
    this.won = won;
  }

  public isWon(): boolean {
    return this.won;
  }
}
