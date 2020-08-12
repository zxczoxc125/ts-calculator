import AbstractFunctionOperand from "./abstract-function-operand";

class PowFunctionOperand extends AbstractFunctionOperand {
  getValue(): string {
    return String(Math.pow(Number(this.operand.getValue()), 2));
  }

  getDesc(): string {
    return `Pow(${this.operand.getDesc()})`;
  }
}

export default PowFunctionOperand;