import AbstractOperand from "../abstract-operand";

abstract class AbstractFunctionOperand extends AbstractOperand {
  private operand: AbstractOperand;

  constructor(operand: AbstractOperand) {
    super();
    this.operand = operand;
  }

  getOperand(): AbstractOperand {
    return this.operand;
  }
}

export default AbstractFunctionOperand;