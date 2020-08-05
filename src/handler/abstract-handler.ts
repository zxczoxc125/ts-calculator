import Request from "../request/request";

abstract class AbstractHandler {
  next: AbstractHandler;

  constructor() {

  }

  setNext(next: AbstractHandler): AbstractHandler {
    this.next = next;
    return next;
  }

  handleRequest(request: Request): void {

  }

  toString(): string {
    return 'AbstractHandler';
  }
}

export default AbstractHandler;