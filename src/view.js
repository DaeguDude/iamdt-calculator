import { convertOperateParam, toFixed } from "./helper";

class View {
  constructor(calculatorModel) {
    this.calculatorModel = calculatorModel;
    this.currentNum = "0";
    this.displayValue = "0";
    this.savedNumber = 0;
    this.savedOperator = null;

    this.onOperatorBtnClick = this.onOperatorBtnClick.bind(this);
    this.onEqualBtnClick = this.onEqualBtnClick.bind(this);
    this.onPercentBtnClick = this.onPercentBtnClick.bind(this);
    this.onNegationBtnClick = this.onNegationBtnClick.bind(this);
    this.onClearBtnClick = this.onClearBtnClick.bind(this);
    this.onDecimalBtnClick = this.onDecimalBtnClick.bind(this);
    this.onNumberBtnClick = this.onNumberBtnClick.bind(this);
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
    this.savedNumber = Number(this.currentNum);
    this.savedOperator = clickedOperator;
    this.currentNum = "0";
  }

  onEqualBtnClick() {
    const result = this.calculatorModel.operate(
      this.savedNumber,
      Number(this.currentNum),
      convertOperateParam(this.savedOperator)
    );

    this.setDisplayValue(result);
  }

  onPercentBtnClick() {
    this.currentNum = this.calculatorModel.percent(this.currentNum);
    this.setDisplayValue(this.currentNum);
  }

  onNegationBtnClick() {
    this.currentNum = this.calculatorModel.negate(this.currentNum);
    this.setDisplayValue(this.currentNum);
  }

  onClearBtnClick() {
    this.savedOperator = null;
    this.savedNumber = 0;
    this.currentNum = "0";
    this.setDisplayValue(this.currentNum);
  }

  onDecimalBtnClick() {
    console.log("소수점 클릭");
  }
}

export { View };
