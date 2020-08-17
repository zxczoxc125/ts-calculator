import AbstractCommand from "../abstract-command";

class SqrtFunctionCommand extends AbstractCommand {
  execute(): void {
    this.getReceiver().actionSqrt();
  }
}

export default SqrtFunctionCommand;