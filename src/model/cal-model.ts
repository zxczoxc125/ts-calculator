import AbstractHandler from "../handler/abstract-handler";
import OperandHandler from "../handler/operand-handler";
import NumberOperand from "../operand/number-operand";

class CalModel {
  private handlerList: AbstractHandler[];

  constructor() {
    const operandHandler: OperandHandler = new OperandHandler(new NumberOperand(null));
    this.handlerList = [operandHandler];
  }

  getDisplayText(): string {
    return '0';
  }

  getEquationText(): string {
    return '';
  }
}

export default CalModel;