/**
 * @jest-environment jsdom
 */

import { CalculatorModel } from "../calculatorModel";
import { View } from "../view";

export const getHtml = () =>
  `<div id="app">
  <div id="screen">
    <h3 id="display-text">0</h3>
  </div>
  <div id="buttons">
    <div class="button-row">
      <div class="button-wrapper"><button id="clear" class="light-grey">C</button></div>
      <div class="button-wrapper"><button id="negation" class="light-grey">+/-</button></div>
      <div class="button-wrapper"><button id="percent" class="light-grey">%</button></div>
      <div class="button-wrapper"><button id="divide" class="orange operator" data-operator="÷">÷</button></div>
    </div>
    <div class="button-row">
      <div class="button-wrapper"><button id="num-7"class="number dark-grey" data-num-value="7">7</button></div>
      <div class="button-wrapper"><button id="num-8"class="number dark-grey" data-num-value="8">8</button></div>
      <div class="button-wrapper"><button id="num-9"class="number dark-grey" data-num-value="9">9</button></div>
      <div class="button-wrapper"><button id="multiply" class="orange operator" data-operator="*">&times</button></div>
    </div>
    <div class="button-row">
      <div class="button-wrapper"><button id="num-4" class="number dark-grey" data-num-value="4">4</button></div>
      <div class="button-wrapper"><button id="num-5" class="number dark-grey" data-num-value="5">5</button></div>
      <div class="button-wrapper"><button id="num-6" class="number dark-grey" data-num-value="6">6</button></div>
      <div class="button-wrapper"><button id="minus" class="orange operator" data-operator="-">&#8722</button></div>
    </div>
    <div class="button-row">
      <div class="button-wrapper"><button id="num-1" class="number dark-grey" data-num-value="1">1</button></div>
      <div class="button-wrapper"><button id="num-2" class="number dark-grey" data-num-value="2">2</button></div>
      <div class="button-wrapper"><button id="num-3" class="number dark-grey" data-num-value="3">3</button></div>
      <div class="button-wrapper"><button id="plus" class="orange operator" data-operator="+">+</button></div>
    </div>
    <div class="button-row">
      <div id="zero-wrapper" class="button-wrapper"><button id="num-0" class="number dark-grey " data-num-value="0">0</button></div>
      <div class="button-wrapper"><button id="decimal" class="dark-grey">.</button></div>
      <div class="button-wrapper"><button id="equal" class="orange">=</button></div>
    </div>
  </div>
</div>
`;

describe("스모크 테스트", () => {
  test("버튼이 클릭될 시 숫자가 제대로 뜨는지 확인합니다.", () => {
    document.body.innerHTML = getHtml();
    const view = new View(new CalculatorModel());
    view.addEventHandlers();

    document.querySelector("#num-1").click();
    document.querySelector("#num-2").click();
    document.querySelector("#num-3").click();

    expect(document.querySelector("#display-text").innerText).toBe("123");
  });
});

describe("clear", () => {
  test("clear가 눌렸을 시 화면에 값을 리셋시킵니다.", () => {
    document.body.innerHTML = getHtml();
    const view = new View(new CalculatorModel());
    view.addEventHandlers();

    document.querySelector("#num-1").click();
    document.querySelector("#num-2").click();
    document.querySelector("#num-3").click();

    expect(document.querySelector("#display-text").innerText).toBe("123");
    document.querySelector("#clear").click();
    expect(document.querySelector("#display-text").innerText).toBe("0");
  });
});

describe("부정", () => {
  test("51, 부정버튼 클릭 -> -51", () => {
    document.body.innerHTML = getHtml();
    const view = new View(new CalculatorModel());
    view.addEventHandlers();

    document.querySelector("#num-5").click();
    document.querySelector("#num-1").click();

    // NOTE: 타입의 일원화를 해주어야 할까?
    expect(document.querySelector("#display-text").innerText).toBe("51");
    document.querySelector("#negation").click();
    expect(document.querySelector("#display-text").innerText).toBe(-51);
    document.querySelector("#negation").click();
    expect(document.querySelector("#display-text").innerText).toBe(51);
  });

  test("1 + 5 = 6, 부정버튼 클릭 -> -6", () => {
    document.body.innerHTML = getHtml();
    const view = new View(new CalculatorModel());
    view.addEventHandlers();

    document.querySelector("#num-1").click();
    document.querySelector("#plus").click();
    document.querySelector("#num-5").click();
    document.querySelector("#equal").click();

    expect(document.querySelector("#display-text").innerText).toBe(6);
    document.querySelector("#negation").click();
    expect(document.querySelector("#display-text").innerText).toBe(-6);
  });

  test("1 + 5 = 6, 부정버튼 클릭 = -6, -6 * 5 = -30", () => {
    document.body.innerHTML = getHtml();
    const view = new View(new CalculatorModel());
    view.addEventHandlers();

    document.querySelector("#num-1").click();
    document.querySelector("#plus").click();
    document.querySelector("#num-5").click();
    document.querySelector("#equal").click();

    document.querySelector("#negation").click();
    expect(document.querySelector("#display-text").innerText).toBe(-6);

    document.querySelector("#multiply").click();
    document.querySelector("#num-5").click();
    document.querySelector("#equal").click();
    expect(document.querySelector("#display-text").innerText).toBe(-30);
  });
});

describe("percent", () => {
  test("퍼센트(%) 버튼이 눌렸을 시 화면의 값을 100으로 나누어줍니다.", () => {
    document.body.innerHTML = getHtml();
    const view = new View(new CalculatorModel());
    view.addEventHandlers();

    document.querySelector("#num-3").click();

    expect(document.querySelector("#display-text").innerText).toBe("3");
    document.querySelector("#percent").click();
    expect(document.querySelector("#display-text").innerText).toBe(0.03);
    document.querySelector("#percent").click();
    expect(document.querySelector("#display-text").innerText).toBe(0.0003);
    document.querySelector("#percent").click();
  });

  test("지수표기를 하지 않습니다.", () => {
    /**
     * 자바스크립트는 보통 모든 number 타입의 값들을 과학적 표기법으로 처리하는데 보통 브라우저들마다
     * 언제 지수로 보여줄 지 정하는 게 다름.
     * https://stackoverflow.com/a/66005705
     */

    document.body.innerHTML = getHtml();
    const view = new View(new CalculatorModel());
    view.addEventHandlers();

    document.querySelector("#num-3").click();

    expect(document.querySelector("#display-text").innerText).toBe("3");
    document.querySelector("#percent").click();
    document.querySelector("#percent").click();
    document.querySelector("#percent").click();
    document.querySelector("#percent").click();
    document.querySelector("#percent").click();
    document.querySelector("#percent").click();
    // NOTE: 타입의 일원화를 해주어야 할까?
    expect(document.querySelector("#display-text").innerText).not.toBe(3e-12);
    expect(document.querySelector("#display-text").innerText).toBe(
      "0.000000000003"
    );
  });

  test("1 + 5 = 6, 퍼센트 버튼 클릭 -> 0.06", () => {
    document.body.innerHTML = getHtml();
    const view = new View(new CalculatorModel());
    view.addEventHandlers();

    document.querySelector("#num-1").click();
    document.querySelector("#plus").click();
    document.querySelector("#num-5").click();
    document.querySelector("#equal").click();

    expect(document.querySelector("#display-text").innerText).toBe(6);
    document.querySelector("#percent").click();
    expect(document.querySelector("#display-text").innerText).toBe(0.06);
  });

  test("1 + 5 = 6, 퍼센트 버튼 클릭 = 0.06, 0.06 + 0.94 = 1", () => {
    document.body.innerHTML = getHtml();
    const view = new View(new CalculatorModel());
    view.addEventHandlers();

    document.querySelector("#num-1").click();
    document.querySelector("#plus").click();
    document.querySelector("#num-5").click();
    document.querySelector("#equal").click();

    document.querySelector("#percent").click();

    document.querySelector("#plus").click();

    document.querySelector("#num-0").click();
    document.querySelector("#decimal").click();
    document.querySelector("#num-9").click();
    document.querySelector("#num-4").click();
    document.querySelector("#equal").click();
    expect(document.querySelector("#display-text").innerText).toBe(1);
  });
});

describe("소수점(decimal)", () => {
  test("소수점을 클릭했을 시 화면에 제대로 나타납니다", () => {
    document.body.innerHTML = getHtml();
    const view = new View(new CalculatorModel());
    view.addEventHandlers();

    document.querySelector("#num-5").click();
    document.querySelector("#decimal").click();

    expect(document.querySelector("#display-text").innerText).toBe("5.");
  });
  test("소수점을 여러 번 클릭해도 화면에 한 번만 나타납니다", () => {
    document.body.innerHTML = getHtml();
    const view = new View(new CalculatorModel());
    view.addEventHandlers();

    document.querySelector("#num-5").click();
    document.querySelector("#decimal").click();
    document.querySelector("#decimal").click();
    document.querySelector("#decimal").click();
    document.querySelector("#decimal").click();

    expect(document.querySelector("#display-text").innerText).not.toBe("5....");
    expect(document.querySelector("#display-text").innerText).toBe("5.");
  });
});

describe("사칙연산", () => {
  describe("더하기", () => {
    test("5 + 5 = 10", () => {
      document.body.innerHTML = getHtml();
      const view = new View(new CalculatorModel());
      view.addEventHandlers();

      document.querySelector("#num-5").click();
      document.querySelector("#plus").click();
      document.querySelector("#num-5").click();
      document.querySelector("#equal").click();
      expect(document.querySelector("#display-text").innerText).toBe(10);
    });

    test("3.2 + 4.5 = 7.7", () => {
      document.body.innerHTML = getHtml();
      const view = new View(new CalculatorModel());
      view.addEventHandlers();

      document.querySelector("#num-3").click();
      document.querySelector("#decimal").click();
      document.querySelector("#num-2").click();
      document.querySelector("#plus").click();
      document.querySelector("#num-4").click();
      document.querySelector("#decimal").click();
      document.querySelector("#num-5").click();
      document.querySelector("#equal").click();
      expect(document.querySelector("#display-text").innerText).toBe(7.7);
    });

    test("-10 + 20 = 10", () => {
      document.body.innerHTML = getHtml();
      const view = new View(new CalculatorModel());
      view.addEventHandlers();

      document.querySelector("#minus").click();
      document.querySelector("#num-1").click();
      document.querySelector("#num-0").click();
      document.querySelector("#plus").click();
      document.querySelector("#num-2").click();
      document.querySelector("#num-0").click();

      document.querySelector("#equal").click();
      expect(document.querySelector("#display-text").innerText).toBe(10);
    });
  });

  describe("빼기", () => {
    test("5 - 10 = -5", () => {
      document.body.innerHTML = getHtml();
      const view = new View(new CalculatorModel());
      view.addEventHandlers();

      document.querySelector("#num-5").click();
      document.querySelector("#minus").click();
      document.querySelector("#num-1").click();
      document.querySelector("#num-0").click();
      document.querySelector("#equal").click();
      expect(document.querySelector("#display-text").innerText).toBe(-5);
    });

    test("1.63 - 2.63 = -1", () => {
      document.body.innerHTML = getHtml();
      const view = new View(new CalculatorModel());
      view.addEventHandlers();

      document.querySelector("#num-1").click();
      document.querySelector("#decimal").click();
      document.querySelector("#num-6").click();
      document.querySelector("#num-3").click();

      document.querySelector("#minus").click();

      document.querySelector("#num-2").click();
      document.querySelector("#decimal").click();
      document.querySelector("#num-6").click();
      document.querySelector("#num-3").click();

      document.querySelector("#equal").click();
      expect(document.querySelector("#display-text").innerText).toBe(-1);
    });

    test("-1.63 - 2.37 = -4", () => {
      document.body.innerHTML = getHtml();
      const view = new View(new CalculatorModel());
      view.addEventHandlers();

      document.querySelector("#minus").click();
      document.querySelector("#num-1").click();
      document.querySelector("#decimal").click();
      document.querySelector("#num-6").click();
      document.querySelector("#num-3").click();

      document.querySelector("#minus").click();

      document.querySelector("#num-2").click();
      document.querySelector("#decimal").click();
      document.querySelector("#num-3").click();
      document.querySelector("#num-7").click();

      document.querySelector("#equal").click();
      expect(document.querySelector("#display-text").innerText).toBe(-4);
    });
  });

  describe("나누기", () => {
    test("5 / 1 = 5", () => {
      document.body.innerHTML = getHtml();
      const view = new View(new CalculatorModel());
      view.addEventHandlers();

      document.querySelector("#num-5").click();
      document.querySelector("#divide").click();
      document.querySelector("#num-1").click();
      document.querySelector("#equal").click();
      expect(document.querySelector("#display-text").innerText).toBe(5);
    });

    test("1.5 / 3 = 0.5", () => {
      document.body.innerHTML = getHtml();
      const view = new View(new CalculatorModel());
      view.addEventHandlers();

      document.querySelector("#num-1").click();
      document.querySelector("#decimal").click();
      document.querySelector("#num-5").click();
      document.querySelector("#divide").click();
      document.querySelector("#num-3").click();
      document.querySelector("#equal").click();
      expect(document.querySelector("#display-text").innerText).toBe(0.5);
    });

    test("-1.5 / 3 = -0.5", () => {
      document.body.innerHTML = getHtml();
      const view = new View(new CalculatorModel());
      view.addEventHandlers();

      document.querySelector("#minus").click();
      document.querySelector("#num-1").click();
      document.querySelector("#decimal").click();
      document.querySelector("#num-5").click();
      document.querySelector("#divide").click();
      document.querySelector("#num-3").click();
      document.querySelector("#equal").click();
      expect(document.querySelector("#display-text").innerText).toBe(-0.5);
    });
  });

  describe("곱하기", () => {
    test("10 * 21 = 210", () => {
      document.body.innerHTML = getHtml();
      const view = new View(new CalculatorModel());
      view.addEventHandlers();

      document.querySelector("#num-1").click();
      document.querySelector("#num-0").click();
      document.querySelector("#multiply").click();
      document.querySelector("#num-2").click();
      document.querySelector("#num-1").click();
      document.querySelector("#equal").click();

      expect(document.querySelector("#display-text").innerText).toBe(210);
    });

    test("1.5 * 3 = 4.5", () => {
      document.body.innerHTML = getHtml();
      const view = new View(new CalculatorModel());
      view.addEventHandlers();

      document.querySelector("#num-1").click();
      document.querySelector("#decimal").click();
      document.querySelector("#num-5").click();
      document.querySelector("#multiply").click();
      document.querySelector("#num-3").click();
      document.querySelector("#equal").click();
      expect(document.querySelector("#display-text").innerText).toBe(4.5);
    });

    test("-2 * 3 = -6", () => {
      document.body.innerHTML = getHtml();
      const view = new View(new CalculatorModel());
      view.addEventHandlers();

      document.querySelector("#minus").click();
      document.querySelector("#num-2").click();
      document.querySelector("#multiply").click();
      document.querySelector("#num-3").click();
      document.querySelector("#equal").click();
      expect(document.querySelector("#display-text").innerText).toBe(-6);
    });
  });
});

describe("연산을 여러 번 할 수 있는지 확인", () => {
  test("이전 결과값을 받아 연산을 할 수 있습니다. (ex -2 + 3 = 1, 1 + 5 = 6)", () => {
    document.body.innerHTML = getHtml();
    const view = new View(new CalculatorModel());
    view.addEventHandlers();

    document.querySelector("#minus").click();
    document.querySelector("#num-2").click();
    document.querySelector("#plus").click();
    document.querySelector("#num-3").click();
    document.querySelector("#equal").click();

    document.querySelector("#plus").click();
    document.querySelector("#num-5").click();
    document.querySelector("#equal").click();
    expect(document.querySelector("#display-text").innerText).toBe(6);
  });

  test("이전 결과값을 받아 연산을 할 수 있습니다. (ex 5 + 3 = 8, 8 - 8 = 0)", () => {
    document.body.innerHTML = getHtml();
    const view = new View(new CalculatorModel());
    view.addEventHandlers();

    document.querySelector("#num-5").click();
    document.querySelector("#plus").click();
    document.querySelector("#num-3").click();
    document.querySelector("#equal").click();

    document.querySelector("#minus").click();
    document.querySelector("#num-8").click();
    document.querySelector("#equal").click();
    expect(document.querySelector("#display-text").innerText).toBe(0);
  });

  test("이전 결과값을 받아 연산을 할 수 있습니다. (ex 5 + 3 = 8, 8 - 8 = 0, 0 - 8 = -8)", () => {
    document.body.innerHTML = getHtml();
    const view = new View(new CalculatorModel());
    view.addEventHandlers();

    document.querySelector("#num-5").click();
    document.querySelector("#plus").click();
    document.querySelector("#num-3").click();
    document.querySelector("#equal").click();

    document.querySelector("#minus").click();
    document.querySelector("#num-8").click();
    document.querySelector("#equal").click();

    document.querySelector("#minus").click();
    document.querySelector("#num-8").click();
    document.querySelector("#equal").click();
    expect(document.querySelector("#display-text").innerText).toBe(-8);
  });
});

describe("연산을 여러 번 할 수 있는지 확인", () => {
  test("이전 결과값을 받아 연산을 할 수 있습니다. (ex -2 + 3 = 1, 1 + 5 = 6)", () => {
    document.body.innerHTML = getHtml();
    const view = new View(new CalculatorModel());
    view.addEventHandlers();

    document.querySelector("#minus").click();
    document.querySelector("#num-2").click();
    document.querySelector("#plus").click();
    document.querySelector("#num-3").click();
    document.querySelector("#equal").click();

    document.querySelector("#plus").click();
    document.querySelector("#num-5").click();
    document.querySelector("#equal").click();
    expect(document.querySelector("#display-text").innerText).toBe(6);
  });

  test("이전 결과값을 받아 연산을 할 수 있습니다. (ex 5 + 3 = 8, 8 - 8 = 0)", () => {
    document.body.innerHTML = getHtml();
    const view = new View(new CalculatorModel());
    view.addEventHandlers();

    document.querySelector("#num-5").click();
    document.querySelector("#plus").click();
    document.querySelector("#num-3").click();
    document.querySelector("#equal").click();

    document.querySelector("#minus").click();
    document.querySelector("#num-8").click();
    document.querySelector("#equal").click();
    expect(document.querySelector("#display-text").innerText).toBe(0);
  });
});

describe("중간 계산에 연산자를 여러번 눌러도 제대로 계산됩니다", () => {
  test("2 + + + - 5 = -3", () => {
    document.body.innerHTML = getHtml();
    const view = new View(new CalculatorModel());
    view.addEventHandlers();

    document.querySelector("#num-2").click();

    document.querySelector("#plus").click();
    document.querySelector("#plus").click();
    document.querySelector("#plus").click();

    document.querySelector("#minus").click();
    document.querySelector("#num-5").click();

    document.querySelector("#equal").click();

    expect(document.querySelector("#display-text").innerText).toBe(-3);
  });

  test("3 + - / * 5 = 15", () => {
    document.body.innerHTML = getHtml();
    const view = new View(new CalculatorModel());
    view.addEventHandlers();

    document.querySelector("#num-3").click();

    document.querySelector("#plus").click();
    document.querySelector("#minus").click();
    document.querySelector("#divide").click();

    document.querySelector("#multiply").click();
    document.querySelector("#num-5").click();
    document.querySelector("#equal").click();

    expect(document.querySelector("#display-text").innerText).toBe(15);
  });
});
