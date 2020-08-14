import AbstractCommand from "../abstract-command";

class MultiplyOperationCommand extends AbstractCommand {
  execute(): void {
    this.receiver.actionOperator('*');
  }
}

export default MultiplyOperationCommand;