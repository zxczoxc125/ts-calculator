import AbstractFunctionOperand from "./abstract-function-operand";

class SqrtFunctionOperand extends AbstractFunctionOperand {
  getInput(): number {
    return Math.sqrt(super.getInput());
  }

  getDesc(): string {
    return `Sqrt(${super.getInput()})`;
  }
}

export default SqrtFunctionOperand;