import AbstractCommand from "../abstract-command";

class AddOperationCommand extends AbstractCommand {
  execute(): void {
    this.receiver.actionOperator('+');
  }
}

export default AddOperationCommand;