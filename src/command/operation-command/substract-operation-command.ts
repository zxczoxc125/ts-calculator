import AbstractCommand from "../abstract-command";

class SubstractOperationCommand extends AbstractCommand {
  execute(): void {
    this.receiver.actionOperator('-');
  }
}

export default SubstractOperationCommand;