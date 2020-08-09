import AbstractFunctionOperand from "./abstract-function-operand";

class FracFunctionOperand extends AbstractFunctionOperand {
  getInput(): number {
    return 1 / this.input;
  }

  getDesc(): string {
    return `Frac(${this.input})`;
  }
}

export default FracFunctionOperand;