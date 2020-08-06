import NumberOperand from "../operand/number-operand";
import AbstractHandler from "../handler/abstract-handler";
import OperandHandler from "../handler/operand-handler";

class Client {
  main(): void {
    this.test();
  }

  test(): void {
    const handlerList: AbstractHandler[] = [];

    const firstNumberOperand: NumberOperand = new NumberOperand(5);
    const secondNumberOperand: NumberOperand = new NumberOperand(10);

    // const operandHandler: OperandHandler = new OperandHandler();
  }

}

export default Client;