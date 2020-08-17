import AbstractCommand from "../abstract-command";

class PowFunctionCommand extends AbstractCommand {
  execute(): void {
    this.getReceiver().actionPow();
  }
}

export default PowFunctionCommand;