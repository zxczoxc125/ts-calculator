import AbstractOperand from "./abstract-operand";

class NumberOperand extends AbstractOperand {
  constructor(input: number) {
    super(input);
  }
}

export default NumberOperand;