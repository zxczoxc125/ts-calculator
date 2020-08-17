import CalDisplayView from "./cal-display-view";
import CalEquationView from "./cal-equation-view";
import InputPannel from "./input-pannel";
import CalModel from "../model/cal-model";
import AbstractCommand from "../command/abstract-command";
import AddOperationCommand from "../command/operation-command/add-operation-command";
import CalCommandReceiver from "../receiver/cal-command-receiver";
import SubstractOperationCommand from "../command/operation-command/substract-operation-command";
import MultiplyOperationCommand from "../command/operation-command/multiply-operation-command";
import DevideOperationCommand from "../command/operation-command/devide-operation-command";
import EqualOperationCommand from "../command/operation-command/equal-operation-command";
import NumberCommand from "../command/number-command";
import StateView from "./state-view";
import InputState from "../state/input-state";
import ClearErrorCommand from "../command/clear-error-command";
import ClearCommand from "../command/clear-command";
import BackCommand from "../command/back-command";
import SqrtFunctionCommand from "../command/function-command/sqrt-function-command";
import PowFunctionCommand from "../command/function-command/pow-function-command";
import FracFunctionCommand from "../command/function-command/frac-function-command";
import PercentFunctionCommand from "../command/function-command/percent-function-command";

class CalMainFrame {
  constructor(calculatorDivId: string) {
    const calculator: HTMLElement = document.getElementById(calculatorDivId);

    const equationCanvas: HTMLCanvasElement = document.createElement('canvas');
    const displayCanvas: HTMLCanvasElement = document.createElement('canvas');
    const stateCanvas : HTMLCanvasElement = document.createElement('canvas');
    const div1: HTMLDivElement = document.createElement('div');
    const div2: HTMLDivElement = document.createElement('div');
    const div3: HTMLDivElement = document.createElement('div');
    const panel1: HTMLDivElement = document.createElement('div');
    const panel2: HTMLDivElement = document.createElement('div');
    const panel3: HTMLDivElement = document.createElement('div');
    const panel4: HTMLDivElement = document.createElement('div');
    const panel5: HTMLDivElement = document.createElement('div');
    const panel6: HTMLDivElement = document.createElement('div');

    div1.appendChild(equationCanvas);
    div2.appendChild(displayCanvas);
    div3.appendChild(stateCanvas);
    calculator.appendChild(div1);
    calculator.appendChild(div2);
    calculator.appendChild(panel1);
    calculator.appendChild(panel2);
    calculator.appendChild(panel3);
    calculator.appendChild(panel4);
    calculator.appendChild(panel5);
    calculator.appendChild(panel6);
    calculator.appendChild(div3);

    const displayView: CalDisplayView = new CalDisplayView(displayCanvas);
    const equationView: CalEquationView = new CalEquationView(equationCanvas);
    const stateView: StateView = new StateView(stateCanvas);

    const calCommandReceiver: CalCommandReceiver = new CalCommandReceiver();

    calCommandReceiver.setCalDisplayView(displayView);
    calCommandReceiver.setCalEquationView(equationView);
    calCommandReceiver.setStateView(stateView);

    const fn: EventListener = function () {
      const element: HTMLElement = this;
      const actionCommand: string = element.textContent || element.innerText;

      let calCommand: AbstractCommand;

      // FIXME: if
      if (actionCommand === '+') {
        calCommand = new AddOperationCommand(calCommandReceiver);
      } else if (actionCommand === '-') {
        calCommand = new SubstractOperationCommand(calCommandReceiver);
      } else if (actionCommand === '*') {
        calCommand = new MultiplyOperationCommand(calCommandReceiver);
      } else if (actionCommand === '/') {
        calCommand = new DevideOperationCommand(calCommandReceiver);
      } else if (actionCommand === '=') {
        calCommand = new EqualOperationCommand(calCommandReceiver);
      } else if (actionCommand === 'CE') {
        calCommand = new ClearErrorCommand(calCommandReceiver);
      } else if (actionCommand === 'C') {
        calCommand = new ClearCommand(calCommandReceiver);
      } else if (actionCommand === 'BACK') {
        calCommand = new BackCommand(calCommandReceiver);
      }  else if (actionCommand === 'SQRT') {
        calCommand = new SqrtFunctionCommand(calCommandReceiver);
      } else if (actionCommand === 'POW') {
        calCommand = new PowFunctionCommand(calCommandReceiver);
      } else if (actionCommand === 'FRAC') {
        calCommand = new FracFunctionCommand(calCommandReceiver);
      } else if (actionCommand === '%') {
        calCommand = new PercentFunctionCommand(calCommandReceiver);
      } else {
        calCommand = new NumberCommand(calCommandReceiver, actionCommand);
      }

      if (calCommand) {
        calCommand.execute();
      }
    }

    const inputPanel1: InputPannel = new InputPannel();
    inputPanel1.initLayout(['%', 'SQRT', 'POW', 'FRAC'], panel1, fn);

    const inputPanel2: InputPannel = new InputPannel();
    inputPanel2.initLayout(['CE', 'C', 'BACK', '/'], panel2, fn);

    const inputPanel3: InputPannel = new InputPannel();
    inputPanel3.initLayout(['7', '8', '9', '*'], panel3, fn);

    const inputPanel4: InputPannel = new InputPannel();
    inputPanel4.initLayout(['4', '5', '6', '-'], panel4, fn);

    const inputPanel5: InputPannel = new InputPannel();
    inputPanel5.initLayout(['1', '2', '3', '+'], panel5, fn);

    const inputPanel6: InputPannel = new InputPannel();
    inputPanel6.initLayout(['+-', '0', '.', '='], panel6, fn);

    const calModel: CalModel = new CalModel();

    displayView.setCalModel(calModel);
    equationView.setCalModel(calModel);
    stateView.setCalModel(calModel);

    displayView.redraw();
    equationView.redraw();
    stateView.redraw();

    calCommandReceiver.setCalModel(calModel);
    calCommandReceiver.changeState(InputState.getInstance());
  }
}

export default CalMainFrame;