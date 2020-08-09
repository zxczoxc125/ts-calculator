import AbstractOperand from "./abstract-operand";

class NumberOperand extends AbstractOperand {
  getDesc(): string {
    return String(this.getInput());
  }
}

export default NumberOperand;