import CalConstants from "./cal-constants";

class CalDisplayView {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor(displayCanvas: HTMLCanvasElement) {
    this.canvas = displayCanvas;

    this.canvas.width = CalConstants.VIEW_WIDTH;
    this.canvas.height = CalConstants.DISPLAY_VIEW_HEIGHT;

    this.canvas.style.border = '1px solid gray';
    this.canvas.style.cursor = 'pointer';

    this.ctx = this.canvas.getContext('2d');
  }
}

export default CalDisplayView;