export function convertOperateParam(operator) {
  switch (operator) {
    case "+":
      return "add";
    case "*":
      return "multiply";
    case "-":
      return "subtract";
    case "÷":
      return "divide";
    default:
      throw new Error("잘못된 연산자 기호입니다.");
  }
}

// NOTE: https://stackoverflow.com/a/1685917
// 이 함수는 지수 표기를 하지 않는다는 한에서만 유효함.
// 실제로 제대로 계산을 하고 싶다면, 라이브러리를 쓰라고 권하고 있음.
export function toFixed(x) {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split("e-")[1]);
    if (e) {
      x *= Math.pow(10, e - 1);
      x = "0." + new Array(e).join("0") + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split("+")[1]);
    if (e > 20) {
      e -= 20;
      x /= Math.pow(10, e);
      x += new Array(e + 1).join("0");
    }
  }
  return x;
}
