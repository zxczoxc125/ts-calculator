import AbstractFunctionOperand from "./abstract-function-operand";

class SqrtFunctionOperand extends AbstractFunctionOperand {
  getValue(): string {
    return String(Math.sqrt(Number(this.getOperand().getValue())));
  }

  getDesc(): string {
    return `Sqrt(${this.getOperand().getDesc()})`;
  }
}

export default SqrtFunctionOperand;