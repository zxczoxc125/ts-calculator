import AbstractOperationHandler from "./abstract-operation-handler";
import Request from "../request/request";

class AddOperationHandler extends AbstractOperationHandler {
  operate(request: Request): number {
    const prevResult: number = request.getResult();
    return this.getOperand().getInput() + prevResult;
  }

  getOperator(): string {
    return '+';
  }
}

export default AddOperationHandler;