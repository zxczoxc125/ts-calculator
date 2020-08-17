import State from "./state";
import AbstractHandler from "../handler/abstract-handler";
import AbstractOperationHandler from "../handler/opration-handler/abstract-operation-handler";
import { getStringNumber, getStringNumberOnBack } from "../util/util";
import NumberOperand from "../operand/number-operand";
import OperandHandler from "../handler/operand-handler";
import IContext from "./i-context";
import CalModel from "../model/cal-model";
import CalEquationView from "../app/cal-equation-view";
import AddOperationHandler from "../handler/opration-handler/add-operation-handler";
import MultiplyOperationHandler from "../handler/opration-handler/multiply-operation-handler";
import SubstractOperationHandler from "../handler/opration-handler/substract-operation-handler";
import DevideOperationHandler from "../handler/opration-handler/devide-operation-handler";
import Request from "../request/request";
import CalDisplayView from "../app/cal-display-view";
import InputState from "./input-state";
import OperatorState from "./operator-state";

class EqualState extends State {
  private static instance: EqualState;

  constructor() {
    super();
    this.stateText = '[Equal-State]';

    if (EqualState.instance) {
      return EqualState.instance;
    }
    EqualState.instance = this;
  }

  static getInstance(): EqualState {
    if (!EqualState.instance) {
      EqualState.instance = new EqualState();
    }
    return EqualState.instance;
  }

  handleAction(iContext: IContext, actionCommand: string): void {
    const calModel: CalModel = iContext.getCalModel();
    const lastHandler: AbstractHandler = calModel.getLastHandler();

    if (lastHandler instanceof AbstractOperationHandler && !lastHandler.hasOperand()) {
      calModel.removeLastHandler();
    }

    // FIXME: if
    if (actionCommand === '+') {
      calModel.addHandler(new AddOperationHandler(null));
    } else if (actionCommand === '-') {
      calModel.addHandler(new SubstractOperationHandler(null));
    } else if (actionCommand === '*') {
      calModel.addHandler(new MultiplyOperationHandler(null));
    } else if (actionCommand === '/') {
      calModel.addHandler(new DevideOperationHandler(null));
    }

    iContext.changeState(OperatorState.getInstance());
  }

  handleNumber(iContext: IContext, actionCommand: string): void {
    const calModel: CalModel = iContext.getCalModel();
    const calEquationView: CalEquationView = iContext.getCalEquationView();
    const lastHandler: AbstractHandler = calModel.getLastHandler();

    // FIXME: instanceof
    if (lastHandler instanceof AbstractOperationHandler) {
      if (lastHandler.getOperand()) {
        const lastValue: string = lastHandler.getOperand().getValue();
        const newValue: string = getStringNumber(lastValue, actionCommand);

        calModel.changeLastHandler(new (Object.getPrototypeOf(lastHandler)).constructor(
          new NumberOperand(newValue)
        ));
      } else {
        lastHandler.setOperand(new NumberOperand(actionCommand));
      }
    } else {
      const lastValue: string = lastHandler.getOperand().getValue();
      const newValue: string = getStringNumber(lastValue, actionCommand);

      calModel.changeLastHandler(new OperandHandler(
        new NumberOperand(newValue)
      ));
    }

    calEquationView.redraw();
    iContext.changeState(InputState.getInstance());
  }

  handleEqual(iContext: IContext): void {
    const calModel: CalModel = iContext.getCalModel();
    const calEquationView: CalEquationView = iContext.getCalEquationView();
    const calDisplayView: CalDisplayView = iContext.getCalDisplayView();
    const resultRequest: Request = calModel.getResultRequest();
    const newHandler: OperandHandler = new OperandHandler(
      new NumberOperand(String(resultRequest.getResult()))
    );

    calModel.initHandler();
    calModel.changeLastHandler(newHandler);

    calEquationView.redraw();
    calDisplayView.redraw();

    iContext.changeState(EqualState.getInstance());
  }

  handleClearError(iContext: IContext): void {
    const calModel: CalModel = iContext.getCalModel();
    const lastHandler: AbstractHandler = calModel.getLastHandler();
    const calEquationView: CalEquationView = iContext.getCalEquationView();

    if (!(lastHandler instanceof NumberOperand)) {
      if (lastHandler.getOperand()) {
        calModel.changeLastHandler(new (Object.getPrototypeOf(lastHandler)).constructor(
          new NumberOperand('')
        ));
      }
    }

    calEquationView.redraw();
    iContext.changeState(InputState.getInstance());
  }

  handleClear(iContext: IContext): void {
    const calModel: CalModel = iContext.getCalModel();
    const calEquationView: CalEquationView = iContext.getCalEquationView();

    calModel.initHandler();

    calEquationView.redraw();
    iContext.changeState(InputState.getInstance());
  }

  handleBack(iContext: IContext): void {
    const calModel: CalModel = iContext.getCalModel();
    const lastHandler: AbstractHandler = calModel.getLastHandler();
    const calEquationView: CalEquationView = iContext.getCalEquationView();

    if (!(lastHandler instanceof NumberOperand)) {
      if (lastHandler.getOperand()) {
        const lastValue: string = lastHandler.getOperand().getValue();
        calModel.changeLastHandler(new (Object.getPrototypeOf(lastHandler)).constructor(
          new NumberOperand(getStringNumberOnBack(lastValue))
        ));
      }
    }

    calEquationView.redraw();
    iContext.changeState(InputState.getInstance());
  }
}

export default EqualState;