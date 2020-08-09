class Request {
  private result: number;
  private equation: string;

  getResult(): number {
    return this.result;
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