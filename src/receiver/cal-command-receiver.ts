import IContext from "../state/i-context";
import State from "../state/state";

class CalCommandReceiver extends IContext {
  actionOperator(actionCommand: string): void {
    this.getCalModel().getState().handleAction(this, actionCommand);
  }

  actionNumber(actionCommand: string): void {
    this.getCalModel().getState().handleNumber(this, actionCommand);
  }

  actionEqual(): void {
    this.getCalModel().getState().handleEqual(this);
  }

  changeState(state: State): void {
    this.getCalModel().setState(state);
    this.getStateView().redraw();
  }

}

export default CalCommandReceiver;