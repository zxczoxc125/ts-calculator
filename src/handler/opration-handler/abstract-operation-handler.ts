import AbstractHandler from "../abstract-handler";
import NumberOperand from "../../operand/number-operand";

abstract class AbstractOperationHandler extends AbstractHandler {
  constructor(operand: NumberOperand) {
    super(operand);
  }
}

export default AbstractOperationHandler;