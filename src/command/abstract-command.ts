import CalCommandReceiver from "../receiver/cal-command-receiver";

abstract class AbstractCommand {
  protected receiver: CalCommandReceiver;

  constructor(receiver: CalCommandReceiver) {
    this.receiver = receiver;
  }

  abstract execute(): void;
}

export default AbstractCommand;