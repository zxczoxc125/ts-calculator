import AbstractFunctionOperand from "./abstract-function-operand";

class SqrtFunctionOperand extends AbstractFunctionOperand {
  getInput(): number {
    return Math.sqrt(this.input);
  }

  getDesc(): string {
    return `Sqrt(${this.input})`;
  }
}

export default SqrtFunctionOperand;