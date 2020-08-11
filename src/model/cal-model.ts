import AbstractHandler from "../handler/abstract-handler";
import OperandHandler from "../handler/operand-handler";
import NumberOperand from "../operand/number-operand";
import Request from "../request/request";

class CalModel {
  private handlerList: AbstractHandler[];

  constructor() {
    this.initHandler();
  }

  getDisplayText(): string {
    return String(this.getResult());
  }

  getEquationText(): string {
    return '';
  }

  addHandler(abstractHandler: AbstractHandler): void {
    this.handlerList.push(abstractHandler);
  }

  initHandler(): void {
    const operandHandler: OperandHandler
      = new OperandHandler(new NumberOperand(0));
    this.handlerList = [operandHandler];
  }

  getLastHandler(): AbstractHandler {
    return this.handlerList[this.handlerList.length - 1];
  }

  changeLastHandler(newAbstractHandler: AbstractHandler): void {
    this.handlerList.pop();
    this.handlerList.push(newAbstractHandler);
    this.handlerList[this.handlerList.length - 1].setNext(newAbstractHandler);
  }

  makeChain(): void {
    this.handlerList.forEach((handler, index) => {
      handler.setNext(this.handlerList[index +  1]);
    });
  }

  getResult(): number {
    this.makeChain();

    const request: Request = new Request();
    this.handlerList[0].handleRequest(request);
    
    return request.getResult();
  }
}

export default CalModel;