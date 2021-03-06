import NumberOperand from "../operand/number-operand";
import AbstractHandler from "../handler/abstract-handler";
import OperandHandler from "../handler/operand-handler";
import Request from "../request/request";
import AddOperationHandler from "../handler/opration-handler/add-operation-handler";
import SubstractOperationHandler from "../handler/opration-handler/substract-operation-handler";
import MultiplyOperationHandler from "../handler/opration-handler/multiply-operation-handler";
import DevideOperationHandler from "../handler/opration-handler/devide-operation-handler";
import SqrtFunctionOperand from "../operand/function-operand/sqrt-function-operand";
import PowFunctionOperand from "../operand/function-operand/pow-function-operand";
import FracFunctionOperand from "../operand/function-operand/frac-function-operand";

class Client {
  main(): void {
    // // 연산 handler 테스트
    // this.test1();
    // this.test2();
    // this.test3();
    // this.test4();
    // this.test5();
    // this.test6();

    // console.log('=================================');

    // // 함수형 operand 테스트
    // this.operanTest1();
    // this.operanTest2();
    // this.operanTest3();

    // console.log('=================================');

    // 함수형 operand 중첩 테스트
    this.operanNestingTest1();
    this.operanNestingTest2();
  }

  // 5 + 10 = 15
  test1(): void {
    const handlerList: AbstractHandler[] = [];

    const operandHandler : OperandHandler = new OperandHandler(new NumberOperand('5'));
    const addOperationHandler : AddOperationHandler = new AddOperationHandler(new NumberOperand('10'));
    
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

    const operandHandler : OperandHandler = new OperandHandler(new NumberOperand('5'));
    const addOperationHandler : SubstractOperationHandler = new SubstractOperationHandler(new NumberOperand('10'));
    
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

    const operandHandler : OperandHandler = new OperandHandler(new NumberOperand('5'));
    const addOperationHandler : MultiplyOperationHandler = new MultiplyOperationHandler(new NumberOperand('10'));
    
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

    const operandHandler : OperandHandler = new OperandHandler(new NumberOperand('5'));
    const addOperationHandler : DevideOperationHandler = new DevideOperationHandler(new NumberOperand('10'));
    
    handlerList.push(operandHandler);
    handlerList.push(addOperationHandler);

    handlerList.forEach((handler, index) => {
      handler.setNext(handlerList[index + 1]);
    });
    
    const request: Request = new Request();
    operandHandler.handleRequest(request);

    console.log(request.getEquation(), '=', request.getResult());
  }

  // 5 + 10 - 3 = 12
  test5(): void {
    const handlerList: AbstractHandler[] = [];
    
    const operandHandler: OperandHandler = new OperandHandler(new NumberOperand('5'));
    const addOperationHandler: AddOperationHandler = new AddOperationHandler(new NumberOperand('10'));
    const substractOperationHandler: SubstractOperationHandler = new SubstractOperationHandler(new NumberOperand('3'));

    handlerList.push(operandHandler);
    handlerList.push(addOperationHandler);
    handlerList.push(substractOperationHandler);

    handlerList.forEach((handler, index) => {
      handler.setNext(handlerList[index + 1]);
    });

    const request: Request = new Request();
    operandHandler.handleRequest(request);

    console.log(request.getEquation(), '=', request.getResult());
  }

  // 5 + 10 - 3 * 5 / 10 = 6
  test6(): void {
    const handlerList: AbstractHandler[] = [];
    
    const operandHandler: OperandHandler = new OperandHandler(new NumberOperand('5'));
    const addOperationHandler: AddOperationHandler = new AddOperationHandler(new NumberOperand('10'));
    const substractOperationHandler: SubstractOperationHandler = new SubstractOperationHandler(new NumberOperand('3'));
    const multiplyOperationHandler: MultiplyOperationHandler = new MultiplyOperationHandler(new NumberOperand('5'));
    const devideOperationHandler: DevideOperationHandler = new DevideOperationHandler(new NumberOperand('10'));

    handlerList.push(operandHandler);
    handlerList.push(addOperationHandler);
    handlerList.push(substractOperationHandler);
    handlerList.push(multiplyOperationHandler);
    handlerList.push(devideOperationHandler);

    handlerList.forEach((handler, index) => {
      handler.setNext(handlerList[index + 1]);
    });

    const request: Request = new Request();
    operandHandler.handleRequest(request);

    console.log(request.getEquation(), '=', request.getResult());
  }

  // Sqrt(4) = 2
  operanTest1(): void {
    const operandHandler: OperandHandler = new OperandHandler(new SqrtFunctionOperand(new NumberOperand('4')));
    const request: Request = new Request();

    operandHandler.handleRequest(request);

    console.log(request.getEquation(), '=', request.getResult());
  }

  // Pow(4) = 16
  operanTest2(): void {
    const operandHandler: OperandHandler = new OperandHandler(new PowFunctionOperand(new NumberOperand('4')));
    const request: Request = new Request();

    operandHandler.handleRequest(request);

    console.log(request.getEquation(), '=', request.getResult());
  }

  // Frac(4) = 0.25
  operanTest3(): void {
    const operandHandler: OperandHandler = new OperandHandler(new FracFunctionOperand(new NumberOperand('4')));
    const request: Request = new Request();

    operandHandler.handleRequest(request);

    console.log(request.getEquation(), '=', request.getResult());
  }

  // Frac(Sqrt(4)) = 0.5
  operanNestingTest1(): void {
    const operandHandler: OperandHandler = new OperandHandler(
      new FracFunctionOperand(new SqrtFunctionOperand(new NumberOperand('4')))
    );

    const request: Request = new Request();
    operandHandler.handleRequest(request);

    console.log(request.getEquation(), '=', request.getResult());
  }

  // Pow(Frac(Sqrt(4))) = 0.0625
  operanNestingTest2(): void {
    const operandHandler: OperandHandler = new OperandHandler(
      new PowFunctionOperand(new FracFunctionOperand(new SqrtFunctionOperand(new NumberOperand('4'))))
    );

    const request: Request = new Request();
    operandHandler.handleRequest(request);

    console.log(request.getEquation(), '=', request.getResult());
  }
}

export default Client;