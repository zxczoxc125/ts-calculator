import AbstractOperationHandler from "./abstract-operation-handler";
import Request from "../../request/request";

class DevideOperationHandler extends AbstractOperationHandler {
  operate(request: Request): number {
    const prevResult: number = request.getResult();
    return prevResult / this.getOperand().getInput();
  }

  getOperator(): string {
    return '/';
  }
}

export default DevideOperationHandler;