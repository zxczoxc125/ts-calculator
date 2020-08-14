import State from "./state";
import CalDisplayView from "../app/cal-display-view";
import CalEquationView from "../app/cal-equation-view";
import StateView from "../app/state-view";
import CalModel from "../model/cal-model";

abstract class IContext {
  private calDisplayView: CalDisplayView;
  private calEquationView: CalEquationView;
  private stateView: StateView;
  private calModel: CalModel;

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

  setCalDisplayView(calDisplayView: CalDisplayView): void {
    this.calDisplayView = calDisplayView;
  }

  setCalEquationView(calEquationView: CalEquationView): void {
    this.calEquationView = calEquationView;
  }

  setStateView(stateView: StateView): void {
    this.stateView = stateView;
  }

  setCalModel(calmodel: CalModel): void {
    this.calModel = calmodel;
  }

  abstract changeState(state: State): void;
  
  abstract actionOperator(actionCommand: string): void;
  
  abstract actionNumber(actionCommand: string): void;
  
  abstract actionEqual(): void;
}

export default IContext;