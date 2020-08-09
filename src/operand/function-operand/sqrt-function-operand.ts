import AbstractFunctionOperand from "./abstract-function-operand";

class SqrtFunctionOperand extends AbstractFunctionOperand {
  getValue(): number {
    return this.operand.getValue();
  }

  getDesc(): string {
    return `Sqrt(${this.operand.getDesc()})`;
  }
}

export default SqrtFunctionOperand;