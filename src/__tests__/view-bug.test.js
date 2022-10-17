/**
 * @jest-environment jsdom
 */

import { CalculatorModel } from "../calculatorModel";
import { View } from "../view";
import { getHtml } from "./view.test";

describe("Bug", () => {
  test("기본 계산 후 equal 버튼을 계속 눌렀을 시 error 터지지 않게 하기", () => {
    document.body.innerHTML = getHtml();
    const view = new View(new CalculatorModel());
    view.addEventHandlers();

    document.querySelector("#num-3").click();
    document.querySelector("#plus").click();
    document.querySelector("#num-5").click();
    document.querySelector("#equal").click();
    document.querySelector("#equal").click();
    document.querySelector("#equal").click();
    document.querySelector("#equal").click();

    expect(document.querySelector("#display-text").innerText).toBe(8);
  });

  test("+ + + 6 - - - 9 를 클릭했는데 화면에 69가 나옴.", () => {
    document.body.innerHTML = getHtml();
    const view = new View(new CalculatorModel());
    view.addEventHandlers();

    document.querySelector("#plus").click();
    document.querySelector("#plus").click();
    document.querySelector("#plus").click();
    document.querySelector("#num-6").click();
    document.querySelector("#minus").click();
    document.querySelector("#minus").click();
    document.querySelector("#minus").click();
    document.querySelector("#num-9").click();

    expect(document.querySelector("#display-text").innerText).not.toBe("69");

    document.querySelector("#equal").click();
    expect(document.querySelector("#display-text").innerText).toBe(-3);
  });
});
