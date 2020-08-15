import AbstractCommand from "../abstract-command";

class MultiplyOperationCommand extends AbstractCommand {
  execute(): void {
    this.getReceiver().actionOperator('*');
  }
}

export default MultiplyOperationCommand;