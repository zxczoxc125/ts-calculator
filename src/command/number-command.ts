import AbstractCommand from "./abstract-command";
import CalCommandReceiver from "../receiver/cal-command-receiver";

class NumberCommand extends AbstractCommand {
  private actionCommand: string;

  constructor(receiver: CalCommandReceiver, actionCommand: string) {
    super(receiver);
    this.actionCommand = actionCommand;
  }

  execute(): void {
    this.getReceiver().actionNumber(this.actionCommand);
  }
}

export default NumberCommand;