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

  actionNumber(actionCommand: string) {
    const lastHandler: AbstractHandler = this.calModel.getLastHandler();

    // FIXME: instanceof
    if (lastHandler instanceof AbstractOperationHandler) {
      this.calModel.addHandler(new OperandHandler(
        new NumberOperand(Number(actionCommand))
      ));
    } else {
      const lastValue: number = lastHandler.getOperand().getValue();
      const newValue: number = Number(String(lastValue) + String(actionCommand));

      this.calModel.changeLastHandler(new OperandHandler(
        new NumberOperand(Number(newValue))
      ));
    }
  }

  actionEqual() {
    const result: number = this.calModel.getResult();
    const operandHandler: OperandHandler = new OperandHandler(
      new NumberOperand(result)
    );

    this.calModel.initHandler();
    this.calModel.addHandler(operandHandler);
    
    console.log(result)

    return result;
  }
}

export default CalCommandReceiver;