import AbstractCommand from "./abstract-command";

class EqualOperationCommand extends AbstractCommand {
  execute(): void {
    this.receiver.actionOperator('=');
  }
}

export default EqualOperationCommand;