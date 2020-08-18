import AbstractCommand from "./abstract-command";

class PlusMinusCommand extends AbstractCommand {
  execute(): void {
    this.getReceiver().actionPlusMinus();
  }
}

export default PlusMinusCommand;