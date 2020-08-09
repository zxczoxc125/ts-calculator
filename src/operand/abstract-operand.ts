abstract class AbstractOperand {
  protected input: number;

  constructor(input: number) {
    this.input = input;
  }

  getInput(): number {
    return this.input;
  }

  abstract getDesc(): string;
}

export default AbstractOperand;