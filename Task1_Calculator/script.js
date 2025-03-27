let displaybox = document.getElementsByClassName("displaybox");
let buttons = document.querySelectorAll("button");
let equalbtn = document.querySelector("button[value='=']");

let displayValue = "";
let firstValue = "";
let secondValue = "";
let operator = "";
let result = "";
let expression = "";

let historylist = document.getElementById("historylist");
let calculation = document.getElementById("calculation");

let clearButton = document.getElementById("clearhistory");
clearButton.addEventListener("click", () => {
  historylist.innerHTML = "";
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonValue = e.target.value;
    console.log(buttonValue);
    if (buttonValue === "C" || buttonValue === "AC") {
      displayValue = "";
      firstValue = "";
      secondValue = "";
      operator = "";
      result = "";
      calculation.value = "0";
    } else if (buttonValue === "pi") {
      displayValue = Math.PI;
    } else if (buttonValue === "sqrt") {
      firstValue =
        displayValue === "" || displayValue === "0" ? 0 : displayValue;
      operator = buttonValue;
      result = Math.sqrt(parseFloat(firstValue));
      displayValue = result;
      calculation.value = `${operator}(${firstValue})`;

      equalbtn.click();
    } else if (
      buttonValue === "+" ||
      buttonValue === "-" ||
      buttonValue === "*" ||
      buttonValue === "/"
    ) {
      firstValue = displayValue;
      operator = buttonValue;
      displayValue = "";
    } else if (buttonValue === "%") {
      firstValue = displayValue;
      operator = buttonValue;
      displayValue += "%";
    } else if (buttonValue === "=") {
      secondValue = displayValue;
      if (operator === "+") {
        result = parseFloat(firstValue) + parseFloat(secondValue);
        calculation.value = `${firstValue} ${operator} ${secondValue}`;
      } else if (operator === "-") {
        result = parseFloat(firstValue) - parseFloat(secondValue);
        calculation.value = `${firstValue} ${operator} ${secondValue}`;
      } else if (operator === "*") {
        result = parseFloat(firstValue) * parseFloat(secondValue);
        calculation.value = `${firstValue} ${operator} ${secondValue}`;
      } else if (operator === "/") {
        result = parseFloat(firstValue) / parseFloat(secondValue);
        calculation.value = `${firstValue} ${operator} ${secondValue}`;
      } else if (operator === "%") {
        result = parseFloat(firstValue) / 100.0;
        calculation.value = `${firstValue} ${operator}`;
      }

      displayValue = result;

      if (calculation.value !== "") {
        addListItem(calculation, result);
      }
    } else {
      displayValue += buttonValue;
    }
    displaybox[0].value = displayValue;
  });
});

string = firstValue;
string += operator;
string += secondValue;
console.log(string);
eval(string);

// Handling the keypress event
document.addEventListener("keypress", (e) => {
  let key = e.key;
  console.log(key);
  if (key === "Enter") {
    key = "=";
  } else if (key === "c") {
    key = "C";
  } else if (key === "a") {
    key = "AC";
  } else if (key === "p") {
    key = "pi";
  } else if (key === "s") {
    key = "sqrt";
  }

  let button = document.querySelector(`button[value="${key}"]`);
  if (button) {
    button.click();
  }
});

function addListItem(calculation, result) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(calculation.value + " = " + result));
  historylist.appendChild(li);
}
