import AbstractHandler from "../abstract-handler";
import Request from "../../request/request";

abstract class AbstractOperationHandler extends AbstractHandler {
  handleRequest(request: Request): void {
    if (this.hasOperand()) {
      const prevEqation: string = request.getEquation();
      request.setEquation(`${prevEqation} ${this.getOperator()} ${this.getOperand().getValue()}`);

      super.handleRequest(request);
    }
  }

  abstract getOperator(): string;
}

export default AbstractOperationHandler;