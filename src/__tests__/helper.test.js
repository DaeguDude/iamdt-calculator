import { convertOperateParam, toFixed } from "../helper";

describe("유틸리티 함수", () => {
  describe("연산자 변환 함수", () => {
    test("연산자 기호를 받아서 알맞는 연산자 문자열로 되돌려 줍니다.", () => {
      expect(convertOperateParam("+")).toBe("add");
      expect(convertOperateParam("*")).toBe("multiply");
      expect(convertOperateParam("-")).toBe("subtract");
      expect(convertOperateParam("÷")).toBe("divide");
    });

    test("잘못된 연산자 기호를 받을 시 에러를 돌려줍니다.", () => {
      expect(() => convertOperateParam("plus")).toThrow();
      expect(() => convertOperateParam("**")).toThrow();
      expect(() => convertOperateParam("x")).toThrow();
      expect(() => convertOperateParam("/")).toThrow();
    });
  });

  describe("지수 -> 일반숫자 변환 함수", () => {
    test("지수를 받아 일반 숫자로 돌려줍니다.", () => {
      expect(toFixed(3e-2)).toBe(0.03);
      expect(toFixed(3e5)).toBe(300000);
      expect(toFixed(0.03e-2)).toBe(0.0003);
      expect(toFixed(-0.03e-2)).toBe(-0.0003);
    });

    test("일반 숫자를 받았을 시 그대로 돌려줍니다.", () => {
      expect(toFixed(3)).toBe(3);
      expect(toFixed(0.91324)).toBe(0.91324);
      expect(toFixed(1324.1234)).toBe(1324.1234);
      expect(toFixed(-0.1234)).toBe(-0.1234);
    });
  });
});
