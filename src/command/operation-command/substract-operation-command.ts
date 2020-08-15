import AbstractCommand from "../abstract-command";

class SubstractOperationCommand extends AbstractCommand {
  execute(): void {
    this.getReceiver().actionOperator('-');
  }
}

export default SubstractOperationCommand;