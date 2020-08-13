import IContext from "./i-context";

abstract class State {
  protected stateText: string;

  getStateText(): string {
    return this.stateText;
  }

  abstract handleNumber(iContext: IContext, actionCommand: string): void;
}

export default State;