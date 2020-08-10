import CalConstants from "./cal-constants";
import CalModel from "../model/cal-model";

class CalEquationView {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private calModel: CalModel;

  constructor(equationCanvas: HTMLCanvasElement) {
    this.canvas = equationCanvas;

    this.canvas.width = CalConstants.VIEW_WIDTH;
    this.canvas.height = CalConstants.DEFAULT_VIEW_HEIGHT;

    this.canvas.style.border = '1px solid gray';
    this.canvas.style.cursor = 'pointer';

    this.ctx = this.canvas.getContext('2d');
  }

  setCalModel(calModel: CalModel): void {
    this.calModel = calModel;
  }

  redraw(): void {
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const equationText = this.calModel.getEquationText();
    
    this.ctx.fillStyle = 'black';
    this.ctx.font = CalConstants.DEFAULT_FONT;
    
    const textWidth: number = this.ctx.measureText(equationText).width;
    this.ctx.fillText(equationText, this.canvas.width - textWidth, this.canvas.height - CalConstants.TEXT_BOTTOM_SPACING);
  }
}

export default CalEquationView;