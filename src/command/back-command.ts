import AbstractCommand from "./abstract-command";

class BackCommand extends AbstractCommand {
  execute(): void {
    this.getReceiver().actionBack();
  }
}

export default BackCommand;