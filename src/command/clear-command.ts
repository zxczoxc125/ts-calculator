import AbstractCommand from "./abstract-command";

class ClearCommand extends AbstractCommand {
  execute(): void {
    this.getReceiver().actionClear();
  }
}

export default ClearCommand;