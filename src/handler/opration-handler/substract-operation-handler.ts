import AbstractOperationHandler from "./abstract-operation-handler";
import Request from "../../request/request";

class SubstractOperationHandler extends AbstractOperationHandler {
  operate(request: Request): number {
    const prevResult: number = request.getResult();
    return prevResult - this.getOperand().getValue();
  }

  getOperator(): string {
    return '-';
  }
}

export default SubstractOperationHandler;