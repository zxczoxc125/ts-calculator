import AbstractCommand from "../abstract-command";

class DevideOperationCommand extends AbstractCommand {
  execute(): void {
    this.getReceiver().actionOperator('/');
  }
}

export default DevideOperationCommand;