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

class CalCommandReceiver {
  private calDisplayView: CalDisplayView;
  private calEquationView: CalEquationView;
  private calModel: CalModel;

  setCalDisplayView(calDisplayView: CalDisplayView): void {
    this.calDisplayView = calDisplayView;
  }

  setCalEquationView(calEquationView: CalEquationView): void {
    this.calEquationView = calEquationView;
  }

  setCalModel(calmodel: CalModel): void {
    this.calModel = calmodel;
  }

  actionOperator(actionCommand: string): void {
    const lastHandler: AbstractHandler = this.calModel.getLastHandler();

    if (lastHandler instanceof AbstractOperationHandler) {
      this.calModel.removeLastHandler();
    }

    // FIXME: if
    if (actionCommand === '+') {
      this.calModel.addHandler(new AddOperationHandler(null));
    } else if (actionCommand === '-') {
      this.calModel.addHandler(new SubstractOperationHandler(null));
    } else if (actionCommand === '*') {
      this.calModel.addHandler(new MultiplyOperationHandler(null));
    } else if (actionCommand === '/') {
      this.calModel.addHandler(new DevideOperationHandler(null));
    }
  }

  actionNumber(actionCommand: string): void {
    const lastHandler: AbstractHandler = this.calModel.getLastHandler();

    // FIXME: instanceof
    if (lastHandler instanceof AbstractOperationHandler) {
      lastHandler.setOperand(
        new NumberOperand(Number(actionCommand))
      );
    } else {
      const lastValue: number = lastHandler.getOperand().getValue();
      const newValue: number = Number(String(lastValue) + String(actionCommand));

      this.calModel.changeLastHandler(new OperandHandler(
        new NumberOperand(Number(newValue))
      ));
    }

    this.calEquationView.redraw();
  }

  actionEqual(): void {
    const resultRequest: Request = this.calModel.getResultRequest();
    const newHandler: OperandHandler = new OperandHandler(
      new NumberOperand(resultRequest.getResult())
    );

    this.calModel.initHandler();
    this.calModel.changeLastHandler(newHandler);

    this.calEquationView.redraw();
    this.calDisplayView.redraw();
  }
}

export default CalCommandReceiver;