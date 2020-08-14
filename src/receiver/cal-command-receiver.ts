import CalDisplayView from "../app/cal-display-view";
import CalEquationView from "../app/cal-equation-view";
import CalModel from "../model/cal-model";
import AbstractHandler from "../handler/abstract-handler";
import OperandHandler from "../handler/operand-handler";
import NumberOperand from "../operand/number-operand";
import AddOperationHandler from "../handler/opration-handler/add-operation-handler";
import SubstractOperationHandler from "../handler/opration-handler/substract-operation-handler";
import MultiplyOperationHandler from "../handler/opration-handler/multiply-operation-handler";
import DevideOperationHandler from "../handler/opration-handler/devide-operation-handler";
import AbstractOperationHandler from "../handler/opration-handler/abstract-operation-handler";
import Request from "../request/request";
import { getStringNumber } from "../util/util";
import StateView from "../app/state-view";
import IContext from "../state/i-context";
import State from "../state/state";

class CalCommandReceiver extends IContext {
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

  actionOperator(actionCommand: string): void {
    this.calModel.getState().handleAction(this, actionCommand);
  }

  actionNumber(actionCommand: string): void {
    this.calModel.getState().handleNumber(this, actionCommand);
  }

  actionEqual(): void {
    this.calModel.getState().handleEqual(this);
  }

  changeState(state: State): void {
    this.calModel.setState(state);
    this.stateView.redraw();
  }

}

export default CalCommandReceiver;