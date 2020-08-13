import AbstractHandler from "../handler/abstract-handler";
import OperandHandler from "../handler/operand-handler";
import NumberOperand from "../operand/number-operand";
import Request from "../request/request";
import State from "../state/state";

class CalModel {
  private handlerList: AbstractHandler[];
  private state: State;

  constructor() {
    this.initHandler();
  }

  getState(): State {
    return this.state;
  }

  setState(state: State): void {
    this.state = state;
  }

  getDisplayText(): string {
    return String(this.getResultRequest().getResult());
  }

  getEquationText(): string {
    return this.getResultRequest().getEquation();
  }

  addHandler(abstractHandler: AbstractHandler): void {
    this.handlerList.push(abstractHandler);
  }

  initHandler(): void {
    const operandHandler: OperandHandler
      = new OperandHandler(new NumberOperand('0'));
    this.handlerList = [operandHandler];
  }

  removeLastHandler(): boolean {
    if (this.handlerList.length > 1) {
      this.handlerList.pop();
      return true;
    }
    return false;
  }

  getLastHandler(): AbstractHandler {
    return this.handlerList[this.handlerList.length - 1];
  }

  changeLastHandler(newAbstractHandler: AbstractHandler): void {
    this.handlerList.pop();
    this.handlerList.push(newAbstractHandler);
  }

  makeChain(): void {
    this.handlerList.forEach((handler, index) => {
      handler.setNext(this.handlerList[index +  1]);
    });
  }

  getResultRequest(): Request {
    this.makeChain();

    const request: Request = new Request();
    this.handlerList[0].handleRequest(request);

    return request;
  }

}

export default CalModel;