import AbstractHandler from "../abstract-handler";
import Request from "../../request/request";

abstract class AbstractOperationHandler extends AbstractHandler {
  handleRequest(request: Request): void {
    super.handleRequest(request);

    const prevEqation: string = request.getEquation();
    request.setEquation(`${prevEqation} ${this.getOperator()} ${this.getOperand().getInput()}`);
  }

  abstract getOperator(): string;
}

export default AbstractOperationHandler;