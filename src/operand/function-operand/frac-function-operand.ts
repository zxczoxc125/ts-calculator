import AbstractFunctionOperand from "./abstract-function-operand";

class FracFunctionOperand extends AbstractFunctionOperand {
  getValue(): string {
    return String(1 / Number(this.operand.getValue()));
  }

  getDesc(): string {
    return `Frac(${this.operand.getDesc()})`;
  }
}

export default FracFunctionOperand;