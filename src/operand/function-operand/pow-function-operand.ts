import AbstractFunctionOperand from "./abstract-function-operand";

class PowFunctionOperand extends AbstractFunctionOperand {
  getValue(): string {
    return String(Math.pow(Number(this.getOperand().getValue()), 2));
  }

  getDesc(): string {
    return `Pow(${this.getOperand().getDesc()})`;
  }
}

export default PowFunctionOperand;