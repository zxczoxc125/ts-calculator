import AbstractCommand from "../abstract-command";

class EqualOperationCommand extends AbstractCommand {
  execute(): void {
    this.getReceiver().actionEqual();
  }
}

export default EqualOperationCommand;