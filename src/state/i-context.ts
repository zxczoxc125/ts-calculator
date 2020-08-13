import State from "./state";
import CalDisplayView from "../app/cal-display-view";
import CalEquationView from "../app/cal-equation-view";
import StateView from "../app/state-view";
import CalModel from "../model/cal-model";

abstract class IContext {
  protected calDisplayView: CalDisplayView;
  protected calEquationView: CalEquationView;
  protected stateView: StateView;
  protected calModel: CalModel;

  abstract changeState(state: State): void;

  abstract setCalDisplayView(calDisplayView: CalDisplayView): void;
  
  abstract setCalEquationView(calEquationView: CalEquationView): void;
  
  abstract setStateView(stateView: StateView): void;
  
  abstract setCalModel(calmodel: CalModel): void;
  
  abstract actionOperator(actionCommand: string): void;
  
  abstract actionNumber(actionCommand: string): void;
  
  abstract actionEqual(): void;

  getCalDisplayView(): CalDisplayView {
    return this.calDisplayView;
  }

  getCalEquationView(): CalEquationView {
    return this.calEquationView;
  }

  getStateView(): StateView {
    return this.stateView;
  }

  getCalModel(): CalModel {
    return this.calModel;
  }
}

export default IContext;