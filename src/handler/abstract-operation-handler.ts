import AbstractHandler from "./abstract-handler";
import Request from "../request/request";

abstract class AbstractOperationHandler extends AbstractHandler {
  operate(request: Request): string {
    return '1';
  }
}

export default AbstractOperationHandler;