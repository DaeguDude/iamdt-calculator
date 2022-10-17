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

  // 중위 후위 변환기 https://www.mathblog.dk/tools/infix-postfix-converter/
  // 후위 표기법 계산기 https://www.calcont.in/Calculator/Postfix_calculator/
  describe("중위표기법 -> 후위표기법 변환 함수", () => {
    test("3+4*7/2 -> 347*2/+", () => {
      const infixArr = [3, "+", 4, "*", 7, "/", 2];
      const result = [3, 4, 7, "*", 2, "/", "+"];
      expect(infixToPostfix(infixArr)).toEqual(result);
    });

    // TODO: 고쳐주어야 함. 작동안함
    // test("-1+3+5*2 -> -13+52*+", () => {
    //   const infixArr = [-1, "+", 3, "+", 5, "*", 2];
    //   const result = [-1, 3, "+", 5, 2, "*", "+"];
    //   expect(infixToPostfix(infixArr)).toEqual(result);
    // });
  });

  describe("후위표기법 계산 함수", () => {
    test("347*2/+ -> 17", () => {
      const postfixArr = [3, 4, 7, "*", 2, "/", "+"];
      const result = 17;
      expect(calculatePostfix(postfixArr)).toBe(result);
    });

    test("-13+52*+ -> 10", () => {
      const postfixArr = [-1, 3, "+", 5, 2, "*", "+"];
      const result = 12;
      expect(calculatePostfix(postfixArr)).toBe(result);
    });
  });
});

function infixToPostfix(infixArr) {
  const arrayOperators = [];
  const postfixArr = [];

  // http://maytrees.tistory.com/71
  // 음수를 나타내는 -의 경우에는 저 알고리즘에서 처리 불가능 합니다.
  // - 연산자의 대상이 되는 두 숫자가 없기 때문인데요.
  // 앞에서 부터 읽어들이면서 지금까지 읽어들인 괄호를 제외한 연산자가 숫자보다 많은 경우에
  // -는 음수 처리를 하는 코드를 넣으면 해결이 될 것 같기도 하네요.

  // 0. 우선순위는 '(' < '+' = '-' < '*' = '/' 순이다.
  const objCharPriority = {
    "*": 3,
    "/": 3,
    "+": 2,
    "-": 2,
    "(": 1,
    ")": 1,
  };

  // 1. 입력받은 중위 표기식에서 한 글자씩 읽어들인다.
  let tempNumberInput = "";

  for (let i = 0; i < infixArr.length; i++) {
    // 2. 읽어들인 글자가 피연산자이면 후위 표기식에 적는다
    if ((infixArr[i] >= "0" && infixArr[i] <= "9") || infixArr[i] == ".") {
      tempNumberInput += infixArr[i];
      //postfixArr.push(char);
    } else {
      // 숫자는 1문자가 아니다!
      if (tempNumberInput != "") {
        postfixArr.push(parseFloat(tempNumberInput));
        tempNumberInput = "";
      }

      if (infixArr[i] === " ") continue;

      // 3. 읽어들인 글자가 연산자이면

      if (infixArr[i] === "(") {
        // 3-1. 왼쪽 괄호일 경우 스택에 넣는다.
        arrayOperators.push(infixArr[i]);
      } else if (infixArr[i] === ")") {
        // 3-2. 오른쪽 괄호일 경우 왼쪽 괄호를 꺼낼 때까지 스택에서 하나씩 꺼내 후위 표기식에 적고 왼쪽 괄호를 뽑으면 버리고 끝낸다.
        let 抜き = "";
        while (arrayOperators.length) {
          抜き = arrayOperators.pop();
          if (抜き === "(") break;
          postfixArr.push(抜き);
        }
      } else {
        // 3-3. 나머지 사칙 연산자의 경우 그 연산자가 스택의 최상위 노드보다 우선순위가 높을 때까지 스택의 최상위 노드를 꺼내 후위 표기식에 적는다.

        while (
          arrayOperators.length &&
          objCharPriority[arrayOperators[arrayOperators.length - 1]] >=
            objCharPriority[infixArr[i]]
        ) {
          const 抜き = arrayOperators.pop();
          postfixArr.push(抜き);
        }

        // 현재 연산자가 스택의 최상위 노드보다 우선순위가 높아졌다면 스택에 넣고 끝낸다.
        arrayOperators.push(infixArr[i]);
      }
    }
  }

  // 숫자는 1문자가 아니다!
  if (tempNumberInput != "") {
    postfixArr.push(parseFloat(tempNumberInput));
    tempNumberInput = "";
  }

  // 4. 1~3 을 반복해서 중위 표기식을 모두 읽어들였다면 스택에 있는 연산자를 최상위 노드부터 꺼내 후위 표기식에 적는다.
  while (arrayOperators.length) postfixArr.push(arrayOperators.pop());

  return postfixArr;

  // const operatorStack = [];
  // const result = [];

  // for (let i = 0; i < infixArr.length; i++) {

  // }
  // console.log(infixArr);
}

function calculatePostfix(postfixArr) {
  // 후위표기법 연산
  // http://soen.kr/lecture/ccpp/cpp2/19-3-2.htm # MakePostfix

  try {
    const operatorFunctions = {
      "*": (o1, o2) => {
        return o1 * o2;
      },
      "/": (o1, o2) => {
        return o1 / o2;
      },
      "+": (o1, o2) => {
        return o1 + o2;
      },
      "-": (o1, o2) => {
        return o1 - o2;
      },
    };

    const arrayCalcStack = [];

    for (let i = 0; i < postfixArr.length; i++) {
      if (!isNaN(postfixArr[i])) {
        // 숫자로 인식되는 부분만큼 읽어서 스택에 푸시한다.
        arrayCalcStack.push(parseFloat(postfixArr[i]));
      } else {
        // 연산자인경우 피연산자 두개를 꺼내서 연산 후 결과를 스택에 넣는다.
        const operator = postfixArr[i];

        const operand2 = arrayCalcStack.pop();
        const operand1 = arrayCalcStack.pop();

        const operateResult = operatorFunctions[operator](operand1, operand2);

        arrayCalcStack.push(operateResult);
      }
    }

    // 마지막으로 스택에 남아있는 값이 최종연산된 값이다
    return arrayCalcStack.pop();
  } catch (e) {
    // 표기식 오류
  }
}
