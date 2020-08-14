import AbstractCommand from "../abstract-command";

class DevideOperationCommand extends AbstractCommand {
  execute(): void {
    this.receiver.actionOperator('/');
  }
}

export default DevideOperationCommand;