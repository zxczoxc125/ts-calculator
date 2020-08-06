import Request from "../request/request";
import AbstractOperand from "../operand/abstract-operand";

abstract class AbstractHandler {
  private next: AbstractHandler;
  private operand: AbstractOperand;

  constructor(opernad: AbstractOperand) {
    this.operand = opernad;
  }

  setNext(next: AbstractHandler): AbstractHandler {
    this.next = next;
    return next;
  }

  handleRequest(request: Request): void {
    const result: string = this.operate(request);
    request.setResult(result);

    if (this.hasNext()) {
      this.next.handleRequest(request);
    }
  }

  hasNext(): boolean {
    return !!this.next;
  }

  abstract operate(request: Request): string;

}

export default AbstractHandler;