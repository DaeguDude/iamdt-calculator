import { CalculatorModel } from "../calculatorModel";

const calculatorModelInstance = new CalculatorModel();
describe("계산 관련 기능 모듈 - CalculatorModel", () => {
  test("더하기", () => {
    expect(calculatorModelInstance.add(1, 2)).toBe(3);
    expect(calculatorModelInstance.add(5000, 3410)).toBe(8410);
    expect(calculatorModelInstance.add(1.2341, -1.2341)).toBe(0);
    expect(calculatorModelInstance.add(-192394.5, 192394)).toBe(-0.5);
  });

  test("빼기", () => {
    expect(calculatorModelInstance.subtract(100, 100)).toBe(0);
    expect(calculatorModelInstance.subtract(42, 43)).toBe(-1);
    expect(calculatorModelInstance.subtract(25285000, 26285000)).toBe(-1000000);
    expect(calculatorModelInstance.subtract(-3.125, -5)).toBe(1.875);
    expect(calculatorModelInstance.subtract(-2.5, 5.123)).toBe(-7.623);
  });

  test("곱하기", () => {
    expect(calculatorModelInstance.multiply(1, 2)).toBe(2);
    expect(calculatorModelInstance.multiply(185, 10)).toBe(1850);
    expect(calculatorModelInstance.multiply(5, -5)).toBe(-25);
    expect(calculatorModelInstance.multiply(-5, -5)).toBe(25);
  });

  test("나누기", () => {
    expect(calculatorModelInstance.divide(1, 2)).toBe(0.5);
    expect(calculatorModelInstance.divide(1000, 20)).toBe(50);
    expect(calculatorModelInstance.divide(4.5, 1.5)).toBe(3);
    expect(calculatorModelInstance.divide(-248, 248)).toBe(-1);
    expect(calculatorModelInstance.divide(-1.5, -0.5)).toBe(3);
  });
});
