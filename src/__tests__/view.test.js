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
