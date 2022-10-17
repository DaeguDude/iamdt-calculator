/**
 * @jest-environment jsdom
 */

import { CalculatorModel } from "../calculatorModel";
import { View } from "../view";

const getHtml = () =>
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
      <div id="zero-wrapper" class="button-wrapper"><button id="num0" class="number dark-grey " data-num-value="0">0</button></div>
      <div class="button-wrapper"><button id="decimal" class="dark-grey">.</button></div>
      <div class="button-wrapper"><button id="equal" class="orange">=</button></div>
    </div>
  </div>
</div>
`;

describe("", () => {
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
  test("부정(+/-)버튼이 눌렸을 시 화면의 값을 부정하여 줍니다.", () => {
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
});
