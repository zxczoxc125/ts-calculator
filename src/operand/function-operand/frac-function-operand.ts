import AbstractFunctionOperand from "./abstract-function-operand";

class FracFunctionOperand extends AbstractFunctionOperand {
  getValue(): string {
    return String(1 / Number(this.getOperand().getValue()));
  }

  getDesc(): string {
    return `Frac(${this.getOperand().getDesc()})`;
  }
}

export default FracFunctionOperand;