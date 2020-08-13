import State from "./state";
import CalDisplayView from "../app/cal-display-view";
import CalEquationView from "../app/cal-equation-view";
import StateView from "../app/state-view";
import CalModel from "../model/cal-model";

interface IContext {
  changeState(state: State): void;

  setCalDisplayView(calDisplayView: CalDisplayView): void;
  
  setCalEquationView(calEquationView: CalEquationView): void;
  
  setStateView(stateView: StateView): void;
  
  setCalModel(calmodel: CalModel): void;
  
  actionOperator(actionCommand: string): void;
  
  actionNumber(actionCommand: string): void;
  
  actionEqual(): void;
}

export default IContext;