import AbstractCommand from "../abstract-command";

class AddOperationCommand extends AbstractCommand {
  execute(): void {
    this.getReceiver().actionOperator('+');
  }
}

export default AddOperationCommand;