import AbstractOperand from "../abstract-operand";

abstract class AbstractFunctionOperand extends AbstractOperand {
  protected operand: AbstractOperand;

  constructor(operand: AbstractOperand) {
    super();
    this.operand = operand;
  }
}

export default AbstractFunctionOperand;