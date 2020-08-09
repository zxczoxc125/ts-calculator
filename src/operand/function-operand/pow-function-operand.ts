import AbstractFunctionOperand from "./abstract-function-operand";

class PowFunctionOperand extends AbstractFunctionOperand {
  getInput(): number {
    return Math.pow(this.input, 2);
  }

  getDesc(): string {
    return `Pow(${this.input})`;
  }
}

export default PowFunctionOperand;