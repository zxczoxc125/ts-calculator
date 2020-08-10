import CalDisplayView from "./cal-display-view";
import CalEquationView from "./cal-equation-view";
import InputPannel from "./input-pannel";

class CalMainFrame {
  constructor(calculatorDivId: string) {
    const calculator: HTMLElement = document.getElementById(calculatorDivId);

    const equationCanvas: HTMLCanvasElement = document.createElement('canvas');
    const displayCanvas: HTMLCanvasElement = document.createElement('canvas');
    const div1: HTMLDivElement = document.createElement('div');
    const div2: HTMLDivElement = document.createElement('div');
    const panel1: HTMLDivElement = document.createElement('div');
    const panel2: HTMLDivElement = document.createElement('div');
    const panel3: HTMLDivElement = document.createElement('div');
    const panel4: HTMLDivElement = document.createElement('div');
    const panel5: HTMLDivElement = document.createElement('div');
    const panel6: HTMLDivElement = document.createElement('div');

    div1.appendChild(equationCanvas);
    div2.appendChild(displayCanvas);
    calculator.appendChild(div1);
    calculator.appendChild(div2);
    calculator.appendChild(panel1);
    calculator.appendChild(panel2);
    calculator.appendChild(panel3);
    calculator.appendChild(panel4);
    calculator.appendChild(panel5);
    calculator.appendChild(panel6);

    const displayView: CalDisplayView = new CalDisplayView(displayCanvas);
    const equationView: CalEquationView = new CalEquationView(equationCanvas);

    const inputPanel1: InputPannel = new InputPannel();
    inputPanel1.initLayout(['%', 'SQRT', 'POW', 'FRAC'], panel1);

    const inputPanel2: InputPannel = new InputPannel();
    inputPanel2.initLayout(['CE', 'C', 'BACK', '/'], panel2);

    const inputPanel3: InputPannel = new InputPannel();
    inputPanel3.initLayout(['7', '8', '9', '*'], panel3);

    const inputPanel4: InputPannel = new InputPannel();
    inputPanel4.initLayout(['4', '5', '6', '-'], panel4);

    const inputPanel5: InputPannel = new InputPannel();
    inputPanel5.initLayout(['1', '2', '3', '+'], panel5);

    const inputPanel6: InputPannel = new InputPannel();
    inputPanel6.initLayout(['+-', '0', '.', '='], panel6);
  }
}

export default CalMainFrame;