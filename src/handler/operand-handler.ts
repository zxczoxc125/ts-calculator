import AbstractHandler from "./abstract-handler";
import Request from "../request/request";

class OperandHandler extends AbstractHandler {
  operate(request: Request): number {
    request.setResult(Number(this.getOperand().getValue()));
    return request.getResult();
  }

  handleRequest(request: Request): void {
    request.setEquation(String(this.getOperand().getDesc()));
    super.handleRequest(request);
  }
}

export default  OperandHandler;