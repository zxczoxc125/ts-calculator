import AbstractHandler from "../abstract-handler";
import NumberOperand from "../../operand/number-operand";
import Request from "../../request/request";

abstract class AbstractOperationHandler extends AbstractHandler {
  constructor(operand: NumberOperand) {
    super(operand);
  }

  handleRequest(request: Request): void {
    super.handleRequest(request);
  }
  
  abstract getOperator(): string;
}

export default AbstractOperationHandler;