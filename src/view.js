import { convertOperateParam, toFixed } from "./helper";

class View {
  constructor(calculatorModel) {
    this.calculatorModel = calculatorModel;
    this.result = null;
    this.currentNum = "0";
    this.displayValue = "0";
    this.savedNumber = 0;
    this.savedOperator = null;
    this.lastInput = null;

    this.onOperatorBtnClick = this.onOperatorBtnClick.bind(this);
    this.onEqualBtnClick = this.onEqualBtnClick.bind(this);
    this.onPercentBtnClick = this.onPercentBtnClick.bind(this);
    this.onNegationBtnClick = this.onNegationBtnClick.bind(this);
    this.onClearBtnClick = this.onClearBtnClick.bind(this);
    this.onDecimalBtnClick = this.onDecimalBtnClick.bind(this);
    this.onNumberBtnClick = this.onNumberBtnClick.bind(this);
    this.addLastInputHandler = this.addLastInputHandler.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  addLastInputHandler() {
    document
      .querySelectorAll("button")
      .forEach((button) =>
        button.addEventListener("click", this.onButtonClick)
      );
  }

  onButtonClick(e) {
    const isNumber = Array.from(e.target.classList).includes("number");
    if (isNumber) {
      return (this.lastInput = "number");
    }

    const isOperator = Array.from(e.target.classList).includes("operator");
    if (isOperator) {
      return (this.lastInput = "operator");
    }

    this.lastInput = e.target.id;
  }

  setDisplayValue(value) {
    this.displayValue = toFixed(value);
    this.populateDisplay(this.displayValue);
  }

  populateDisplay(value) {
    document.querySelector("#display-text").innerText = value;
  }

  addEventHandlers() {
    const clearBtn = document.querySelector("#clear");
    clearBtn.addEventListener("click", this.onClearBtnClick);

    const negationBtn = document.querySelector("#negation");
    negationBtn.addEventListener("click", this.onNegationBtnClick);

    const percentBtn = document.querySelector("#percent");
    percentBtn.addEventListener("click", this.onPercentBtnClick);

    const equalBtn = document.querySelector("#equal");
    equalBtn.addEventListener("click", this.onEqualBtnClick);

    const decimalBtn = document.querySelector("#decimal");
    decimalBtn.addEventListener("click", this.onDecimalBtnClick);

    const operatorBtns = document.querySelectorAll(".operator");
    operatorBtns.forEach((operatorBtn) =>
      operatorBtn.addEventListener("click", this.onOperatorBtnClick)
    );

    const numBtns = document.querySelectorAll(".number");
    numBtns.forEach((numBtn) =>
      numBtn.addEventListener("click", this.onNumberBtnClick)
    );

    this.addLastInputHandler();
  }

  onNumberBtnClick(e) {
    if (this.currentNum === "0") {
      this.currentNum = e.target.dataset.numValue;
    } else {
      this.currentNum += e.target.dataset.numValue;
    }

    this.setDisplayValue(this.currentNum);
  }

  onOperatorBtnClick(e) {
    const clickedOperator = e.target.dataset.operator;

    const hasPreviousResult = this.result !== null;
    if (hasPreviousResult) {
      this.savedNumber = this.result;
      this.savedOperator = clickedOperator;
      this.currentNum = "0";
      return;
    }

    const isOperatorClickedInARow = this.lastInput === "operator";
    if (isOperatorClickedInARow) {
      this.savedOperator = clickedOperator;
      return;
    }

    const isFirstInputMinus =
      clickedOperator === "-" && !this.savedOperator && this.currentNum === "0";
    if (isFirstInputMinus) {
      this.currentNum = "-";
      return;
    }

    this.savedNumber = Number(this.currentNum);
    this.savedOperator = clickedOperator;
    this.currentNum = "0";
  }

  onEqualBtnClick() {
    if (!this.savedOperator) {
      return;
    }

    const result = this.calculatorModel.operate(
      this.savedNumber,
      Number(this.currentNum),
      convertOperateParam(this.savedOperator)
    );

    this.onCalculated(result);
    this.setDisplayValue(result);
  }

  onCalculated(result) {
    this.result = result;
    this.savedOperator = null;
    this.savedNumber = 0;
    this.currentNum = "0";
  }

  onPercentBtnClick() {
    const hasPreviousResult = !!this.result;
    if (hasPreviousResult) {
      const percentedValue = this.calculatorModel.percent(this.result);
      this.onCalculated(percentedValue);
      this.setDisplayValue(percentedValue);
      return;
    }

    this.currentNum = this.calculatorModel.percent(this.currentNum);
    this.setDisplayValue(this.currentNum);
  }

  onNegationBtnClick() {
    const hasPreviousResult = !!this.result;
    if (hasPreviousResult) {
      const negatedValue = this.calculatorModel.negate(this.result);
      this.onCalculated(negatedValue);
      this.setDisplayValue(negatedValue);
      return;
    }

    this.currentNum = this.calculatorModel.negate(this.currentNum);
    this.setDisplayValue(this.currentNum);
  }

  onClearBtnClick() {
    this.result = null;
    this.savedOperator = null;
    this.savedNumber = 0;
    this.currentNum = "0";
    this.setDisplayValue(this.currentNum);
  }

  onDecimalBtnClick() {
    const hasDecimal = this.currentNum.indexOf(".") !== -1;
    if (!hasDecimal) {
      this.currentNum += ".";
    }

    this.setDisplayValue(this.currentNum);
  }
}

export { View };
