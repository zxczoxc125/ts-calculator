import AbstractCommand from "./abstract-command";

class ClearErrorCommand extends AbstractCommand {
  execute(): void {
    this.getReceiver().actionClearError();
  }
}

export default ClearErrorCommand;