abstract class AbstractOperand {
  abstract getDesc(): string;
  
  abstract getValue(): number;
}

export default AbstractOperand;