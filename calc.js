
let input1 = NaN;
let input2 = NaN;
let currOp = "";
let justEntered = false;

let display = document.querySelector("#display");


let options = document.querySelectorAll(".option");
options.forEach((option) => {
    option.style.cssText = 
    `display: flex; justify-content: center; align-items:center; 
    font-size:25px; color: white;background-color: black;`;
});


let clearButton = document.querySelector("#clear");
clearButton.addEventListener('click',clear);
function clear(){
    display.innerText = "0";
    input1 = NaN;
    input2 = NaN;
    currOp = "";
    justEntered = false;
}

let deleteButton = document.querySelector("#delete");
deleteButton.addEventListener('click',deleteNum);
function deleteNum(){
    let displayText = display.innerText;
    if(displayText.length === 1){
        displayText = "0";
    } else {
        displayText = displayText.substring(0,displayText.length-1);
    }
    display.innerText = displayText;
}

let decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener('click',addDecimal);
function addDecimal(){
    let displayText = display.innerText;
    if(displayText < 12 && displayText.indexOf('.') == -1){
        displayText+=".";
    }
    display.innerText = displayText;
}

let negate = document.querySelector("#negate");
negate.addEventListener('click',negateVal);
function negateVal(){
    displayText = +display.innerText;
    displayText= -1*displayText;
    display.innerText = "" + displayText;
}

let percent = document.querySelector("#percent");
percent.addEventListener('click',percentVal);
function percentVal(){
    if(display.innerText.length < 11){
        displayText = +display.innerText;
        displayText /= 100;
        display.innerText=displayText;
    }
}

let numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener('click',(e) => {
        let displayText = display.innerText;
        if(displayText.length <= 13){
            if(justEntered){
                clear();
                displayText = "";
            }
            if(displayText === "0"){
                displayText = "";
            }
            displayText+= e.target.innerText;
            display.innerText = displayText;
            justEntered = false;
        }
    });
});

let opButtons = document.querySelectorAll(".operator");
console.log(opButtons);
opButtons.forEach((opButton) => {
    opButton.addEventListener('click',() => {
        
        if(isNaN(input1)){
            input1 = +display.innerText;   
        } else {
            evaluate();
        }
        display.innerText = "0";
        
        currOp = opButton.innerText;
        justEntered = false;
    });
});


let equals = document.querySelector("#equals");
equals.addEventListener('click',evaluate);

function evaluate(){
    if(currOp === "" || isNaN(input1)){
        return;
    }
    input2 = +display.innerText;
    let result = +(operate().toString());
    input1 = result;
    input2 = NaN;
    currOp = "";
    let displayText = "" + result;
    display.innerText = displayText.substring(0,13);
    justEntered = true;
}

function cleanResult(str){
    let index = str.length-1;
    while(str.charAt(index) === "0"){
        index--;
    }
    return str.substring(0,index+1);
}

function operate(){
    switch(currOp){
        case "+":
            return add(input1,input2);
        case "-":
            return subtract(input1,input2);
        case "x":
            return multiply(input1,input2);
        case "/":
            return divide(input1,input2);
        default:
            console.log("invalid operator");
    }
}

function add(x,y){
    return +x+ +y;
}

function subtract(x,y){
    return +x - +y;
}

function multiply(x,y){
    return +x * +y;
}

function divide(x,y){
    if(y==0){
        prompt("YOU CANT DIVIDE BY 0");
        return 0;
    }
    return +x / +y;
}