import AbstractFunctionOperand from "./abstract-function-operand";

class PercentFunctionOperand extends AbstractFunctionOperand {
  getValue(): string {
    return String(1 / Number(this.getOperand().getValue()));
  }

  getDesc(): string {
    return `${this.getOperand().getDesc()}%`;
  }
}

export default PercentFunctionOperand;