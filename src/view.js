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
    this.displayValue = value;
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

  onNumberBtnClick() {
    console.log("숫자 클릭");
  }

  onOperatorBtnClick() {
    console.log("연산자 클릭");
  }

  onEqualBtnClick() {
    console.log("계산 클릭");
  }

  onPercentBtnClick() {
    console.log("퍼센트 클릭");
  }

  onNegationBtnClick() {
    console.log("부정 클릭");
  }

  onClearBtnClick() {
    console.log("클리어 클릭");
  }

  onDecimalBtnClick() {
    console.log("소수점 클릭");
  }
}

export { View };
