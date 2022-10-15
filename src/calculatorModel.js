class CalculatorModel {
  constructor() {}

  add(firstNum, secondNum) {
    return firstNum + secondNum;
  }

  subtract(firstNum, secondNum) {
    return firstNum - secondNum;
  }

  multiply(firstNum, secondNum) {
    return firstNum * secondNum;
  }

  divide(firstNum, secondNum) {
    return firstNum / secondNum;
  }

  operate(firstNum, secondNum, operator) {
    switch (operator) {
      case "add":
        return this.add(firstNum, secondNum);
      case "subtract":
        return this.subtract(firstNum, secondNum);
      case "multiply":
        return this.multiply(firstNum, secondNum);
      case "divide":
        return this.divide(firstNum, secondNum);
      default:
        throw new Error("잘못된 연산자입니다.");
    }
  }

  negate(num) {
    return -num;
  }
}

export { CalculatorModel };
