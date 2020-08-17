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

  actionClearError(): void {
    this.getCalModel().getState().handleClearError(this);
  }

  actionClear(): void {
    this.getCalModel().getState().handleClear(this);
  }

  actionBack(): void {
    this.getCalModel().getState().handleBack(this);
  }

  actionSqrt(): void {
    this.getCalModel().getState().handleSqrt(this);
  }

  actionPow(): void {
    this.getCalModel().getState().handlePow(this);
  }

  actionFrac(): void {
    this.getCalModel().getState().handleFrac(this);
  }

  actionPercent(): void {
    this.getCalModel().getState().handlePercent(this);
  }
}

export default CalCommandReceiver;