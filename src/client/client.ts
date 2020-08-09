import NumberOperand from "../operand/number-operand";
import AbstractHandler from "../handler/abstract-handler";
import OperandHandler from "../handler/operand-handler";
import AddOperationHandler from "../handler/add-operation-handler";
import Request from "../request/request";

class Client {
  main(): void {
    this.test1();
  }

  // 5 + 10 = 15
  test1(): void {
    const handlerList: AbstractHandler[] = [];

    const operandHandler : OperandHandler = new OperandHandler(new NumberOperand(5));
    const addOperationHandler : AddOperationHandler = new AddOperationHandler(new NumberOperand(10));
    
    handlerList.push(operandHandler);
    handlerList.push(addOperationHandler);

    handlerList.forEach((handler, index) => {
      handler.setNext(handlerList[index + 1]);
    });
    
    const request: Request = new Request();
    operandHandler.handleRequest(request);

    console.log('10 + 15 =', request.getResult());
  }

}

export default Client;