import AbstractFunctionOperand from "./abstract-function-operand";

class SqrtFunctionOperand extends AbstractFunctionOperand {
  getValue(): string {
    return String(Math.sqrt(Number(this.operand.getValue())));
  }

  getDesc(): string {
    return `Sqrt(${this.operand.getDesc()})`;
  }
}

export default SqrtFunctionOperand;