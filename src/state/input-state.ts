import State from "./state";
import AbstractHandler from "../handler/abstract-handler";
import AbstractOperationHandler from "../handler/opration-handler/abstract-operation-handler";
import { getStringNumber } from "../util/util";
import NumberOperand from "../operand/number-operand";
import OperandHandler from "../handler/operand-handler";
import IContext from "./i-context";
import CalModel from "../model/cal-model";
import CalEquationView from "../app/cal-equation-view";

class InputState extends State {
  private static instance: InputState;

  constructor() {
    super();
    this.stateText = '[Input-State]';

    if (InputState.instance) {
      return InputState.instance;
    }
    InputState.instance = this;
  }

  static getInstance(): InputState {
    if (!InputState.instance) {
      InputState.instance = new InputState();
    }
    return InputState.instance;
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
  }
}

export default InputState;