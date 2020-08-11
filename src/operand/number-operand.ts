import AbstractOperand from "./abstract-operand";

class NumberOperand extends AbstractOperand {
  protected input: number;

  constructor(input: number) {
    super();
    this.input = input;
  }

  getInput(): number {
    return this.input;
  }

  setInput(input: number): void {
    this.input = input;
  }

  getValue(): number {
    return this.input;
  }

  getDesc(): string {
    return String(this.getInput());
  }
}

export default NumberOperand;