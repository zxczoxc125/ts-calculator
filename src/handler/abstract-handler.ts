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

  setOperand(opernad: AbstractOperand): void {
    this.operand = opernad;
  }

  setNext(next: AbstractHandler): void {
    this.next = next;
  }

  handleRequest(request: Request): void {
    if (this.hasOperand()) {
      const result: number = this.operate(request);
      request.setResult(result);

      if (this.hasNext()) {
        this.next.handleRequest(request);
      }
    }
  }

  hasNext(): boolean {
    return !!this.next;
  }

  hasOperand(): boolean {
    return !!this.operand;
  }

  abstract operate(request: Request): number;

}

export default AbstractHandler;