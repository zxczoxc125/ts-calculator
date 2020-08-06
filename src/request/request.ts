class Request {
  private result: string;
  private equation: string;

  getResult(): string {
    return this.result;
  }

  setResult(result: string): void {
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