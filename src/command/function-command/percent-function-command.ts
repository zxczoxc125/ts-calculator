import AbstractCommand from "../abstract-command";

class PercentFunctionCommand extends AbstractCommand {
  execute(): void {
    this.getReceiver().actionPercent();
  }
}

export default PercentFunctionCommand;