import AbstractFunctionOperand from "./abstract-function-operand";

class PowFunctionOperand extends AbstractFunctionOperand {
  getValue(): number {
    return Math.pow(this.operand.getValue(), 2);
  }

  getDesc(): string {
    return `Pow(${this.operand.getValue()})`;
  }
}

export default PowFunctionOperand;