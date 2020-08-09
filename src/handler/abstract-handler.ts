import Request from "../request/request";
import AbstractOperand from "../operand/abstract-operand";

abstract class AbstractHandler {
  private next: AbstractHandler;
  private operand: AbstractOperand;

  constructor(opernad: AbstractOperand) {
    this.operand = opernad;
  }

  getOperand(): AbstractOperand {
    return this.operand;
  }

  setNext(next: AbstractHandler): void {
    this.next = next;
  }

  handleRequest(request: Request): void {
    const result: number = this.operate(request);
    request.setResult(result);

    const prevEqation: string = request.getEquation();
    request.setEquation(`${prevEqation} ${this.getOperator()} ${this.getOperand().getInput()}`);

    if (this.hasNext()) {
      this.next.handleRequest(request);
    }
  }

  hasNext(): boolean {
    return !!this.next;
  }

  abstract operate(request: Request): number;

  abstract getOperator(): string;

}

export default AbstractHandler;