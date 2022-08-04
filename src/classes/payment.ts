export class Payment {
  readonly recipient: string;
  private details: string;
  public amount: number

  constructor(r: string, d: string, a: number) {
    this.recipient = r
    this.details = d
    this.amount = a
  }

  format() {
    return `${this.recipient} is owed ${this.amount} $ for ${this.details}`
  }
}