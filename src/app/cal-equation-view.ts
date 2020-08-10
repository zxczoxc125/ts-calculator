import CalConstants from "./cal-constants";

class CalEquationView {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor(equationCanvas: HTMLCanvasElement) {
    this.canvas = equationCanvas;

    this.canvas.width = CalConstants.VIEW_WIDTH;
    this.canvas.height = CalConstants.DEFAULT_VIEW_HEIGHT;

    this.canvas.style.border = '1px solid gray';
    this.canvas.style.cursor = 'pointer';

    this.ctx = this.canvas.getContext('2d');
  }
}

export default CalEquationView;