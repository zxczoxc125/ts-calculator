import NumberOperand from "../operand/number-operand";
import AbstractHandler from "../handler/abstract-handler";
import OperandHandler from "../handler/operand-handler";
import Request from "../request/request";
import AddOperationHandler from "../handler/opration-handler/add-operation-handler";
import SubstractOperationHandler from "../handler/opration-handler/substract-operation-handler";
import MultiplyOperationHandler from "../handler/opration-handler/multiply-operation-handler";
import DevideOperationHandler from "../handler/opration-handler/devide-operation-handler";

class Client {
  main(): void {
    this.test1();
    this.test2();
    this.test3();
    this.test4();
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

    console.log(request.getEquation(), '=', request.getResult());
  }

  // 5 * 10 = 50;
  test3(): void {
    const handlerList: AbstractHandler[] = [];

    const operandHandler : OperandHandler = new OperandHandler(new NumberOperand(5));
    const addOperationHandler : MultiplyOperationHandler = new MultiplyOperationHandler(new NumberOperand(10));
    
    handlerList.push(operandHandler);
    handlerList.push(addOperationHandler);

    handlerList.forEach((handler, index) => {
      handler.setNext(handlerList[index + 1]);
    });
    
    const request: Request = new Request();
    operandHandler.handleRequest(request);

    console.log(request.getEquation(), '=', request.getResult());
  }

  // 5 / 10 = 0.5;
  test4(): void {
    const handlerList: AbstractHandler[] = [];

    const operandHandler : OperandHandler = new OperandHandler(new NumberOperand(5));
    const addOperationHandler : DevideOperationHandler = new DevideOperationHandler(new NumberOperand(10));
    
    handlerList.push(operandHandler);
    handlerList.push(addOperationHandler);

    handlerList.forEach((handler, index) => {
      handler.setNext(handlerList[index + 1]);
    });
    
    const request: Request = new Request();
    operandHandler.handleRequest(request);

    console.log(request.getEquation(), '=', request.getResult());
  }

  // 5 - 10 = -5;
  test2(): void {
    const handlerList: AbstractHandler[] = [];

    const operandHandler : OperandHandler = new OperandHandler(new NumberOperand(5));
    const addOperationHandler : SubstractOperationHandler = new SubstractOperationHandler(new NumberOperand(10));
    
    handlerList.push(operandHandler);
    handlerList.push(addOperationHandler);

    handlerList.forEach((handler, index) => {
      handler.setNext(handlerList[index + 1]);
    });
    
    const request: Request = new Request();
    operandHandler.handleRequest(request);

    console.log(request.getEquation(), '=', request.getResult());
  }

}

export default Client;