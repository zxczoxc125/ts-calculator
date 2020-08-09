import AbstractHandler from "./abstract-handler";
import Request from "../request/request";

class OperandHandler extends AbstractHandler {
  operate(request: Request): number {
    request.setResult(this.getOperand().getInput());
    return request.getResult();
  }

  getOperator(): string {
    return '';
  }
}

export default  OperandHandler;