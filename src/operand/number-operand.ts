import AbstractOperand from "./abstract-operand";

class NumberOperand extends AbstractOperand {
  protected input: string;

  constructor(input: string) {
    super();
    this.input = input;
  }

  getInput(): string {
    return this.input;
  }

  setInput(input: string): void {
    this.input = input;
  }

  getValue(): string {
    return Number(this.input) ? this.input : '';
  }

  getDesc(): string {
    return String(this.getInput());
  }
}

export default NumberOperand;