// global variables and initialize
let num1 = 0;
let tempNum1Array = [];
let num2 = 0;
let tempNum2Array = [];
let savedFirstValue = 0;
let operator = "";
let tempOperatorArray = [];

// basic math ops

function add(num1, num2) {
    let addValue = (num1 + num2);
    let rounded = Math.round((addValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);
    console.log("add", rounded);
    const calcDisplay = document.querySelector("#display");
    calcDisplay.textContent = rounded;
}