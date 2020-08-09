import AbstractHandler from "./abstract-handler";
import Request from "../request/request";

class OperandHandler extends AbstractHandler {
  operate(request: Request): number {
    request.setResult(this.getOperand().getInput());
    return request.getResult();
  }

  handleRequest(request: Request): void {
    request.setEquation(String(this.getOperand().getInput()));
    super.handleRequest(request);
  }
}

export default  OperandHandler;