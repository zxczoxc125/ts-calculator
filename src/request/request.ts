class Request {
  private result: number;
  private equation: string;

  constructor() {
    this.equation = '';
  }

  getResult(): number {
    return this.result || 0;
  }

  setResult(result: number): void {
    this.result = result;
  }

  getEquation(): string {
    return this.equation;
  }

  setEquation(equation: string): void {
    this.equation = equation;
  }
}

export default Request;