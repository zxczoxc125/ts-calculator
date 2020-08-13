import CalConstants from "./cal-constants";
import CalModel from "../model/cal-model";

class StateView {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private calModel: CalModel;

  constructor(displayCanvas: HTMLCanvasElement) {
    this.canvas = displayCanvas;

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

    const displayText = this.calModel.getDisplayText();
    
    this.ctx.fillStyle = 'black';
    this.ctx.font = CalConstants.DEFAULT_FONT;
    
    const textWidth: number = this.ctx.measureText(displayText).width;
    this.ctx.fillText(displayText, this.canvas.width - textWidth, this.canvas.height - CalConstants.TEXT_BOTTOM_SPACING);
  }
}

export default StateView;