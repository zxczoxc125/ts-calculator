class Request {
  result: string;

  getResult(): string {
    return this.result;
  }

  setResult(result: string): void {
    this.result = result;
  }
}

export default Request;