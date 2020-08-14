import CalCommandReceiver from "../receiver/cal-command-receiver";

abstract class AbstractCommand {
  private receiver: CalCommandReceiver;

  constructor(receiver: CalCommandReceiver) {
    this.receiver = receiver;
  }

  abstract execute(): void;

  getReceiver(): CalCommandReceiver {
    return this.receiver;
  }
}

export default AbstractCommand;