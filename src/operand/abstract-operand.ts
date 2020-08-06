abstract class AbstractOperand {
  private input: string | number;

  constructor(input: string | number) {
    this.input = input;
  }

  getInput() {
    return this.input;
  }
}

export default AbstractOperand;