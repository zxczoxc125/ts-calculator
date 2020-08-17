import AbstractCommand from "../abstract-command";

class FracFunctionCommand extends AbstractCommand {
  execute(): void {
    this.getReceiver().actionFrac();
  }
}

export default FracFunctionCommand;