abstract class AbstractOperand {
  private input: number;

  constructor(input: number) {
    this.input = input;
  }

  getInput() {
    return this.input;
  }
}

export default AbstractOperand;