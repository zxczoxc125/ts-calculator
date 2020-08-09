import AbstractFunctionOperand from "./abstract-function-operand";

class FracFunctionOperand extends AbstractFunctionOperand {
  getValue(): number {
    return 1 / this.operand.getValue();
  }

  getDesc(): string {
    return `Frac(${this.operand.getDesc()})`;
  }
}

export default FracFunctionOperand;