let result = document.getElementById("result");
let expression = document.getElementById("expression");

let currentInput = "";
let fullExpression = "";

document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    let value = button.innerText;

    if (value === "AC") {
      currentInput = "";
      fullExpression = "";
      result.innerText = "0";
      expression.innerText = "";
    } 
    else if (value === "⌫") {
      
      currentInput = currentInput.slice(0, -1);
      result.innerText = currentInput || "0";
    } 
    else if (value === "=") {
      try {
        let final = fullExpression + currentInput;
        final = final.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-");
        result.innerText = eval(final);
        expression.innerText = final;
        currentInput = "";
        fullExpression = "";
      } catch {
        result.innerText = "Error";
      }
    } 
    else if (["+", "−", "×", "÷", "%"].includes(value)) {
      fullExpression += currentInput + value;
      expression.innerText = fullExpression;
      currentInput = "";
    } 
    else {
      currentInput += value;
      result.innerText = currentInput;
    }
  });
});
