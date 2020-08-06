import AbstractOperand from "../operand/abstract-operand";
import AbstractHandler from "./abstract-handler";
import Request from "../request/request";

class OperandHandler extends AbstractHandler {
  operate(request: Request): string {
    return '1';
  }
}

export default  OperandHandler;