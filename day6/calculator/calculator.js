let display = document.getElementById("result");
let calculated = false;

//function will be called when number or operator is pressed
function append(char) {
  //if display is empty or calculated the previous result
  if (display.value === "0" || calculated === true) display.value = char;
  else display.value += char;
  calculated = false;
}
//function will be called when = sign is pressed
function calculate() {
  let expression = display.value;
  try {
    let result = eval(expression);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
  calculated = true;
}
function clearAll() {
  display.value = "0";
}
function backSpace() {
  let value = display.value;
  if (value.length > 1) {
    display.value = value.substr(0, value.length - 1);
  } else {
    display.value = "0";
  }
}

function memorySave() {
  let memory = display.value;
  localStorage.setItem("memory", memory);
}
function memoryRestore() {
  let memory = localStorage.getItem("memory");
  if (memory) display.value = memory;
}
function memoryCancel() {
  localStorage.removeItem("memory");
}
function memoryAdd() {
  let memory = display.value;
  let currentMemory = localStorage.getItem("memory");
  if (currentMemory) memory = Number(memory) + Number(currentMemory);
  localStorage.setItem("memory", memory);
}
function memoryMinus() {
  let memory = display.value;
  let currentMemory = localStorage.getItem("memory");
  if (currentMemory) memory = Number(memory) - Number(currentMemory);
  localStorage.setItem("memory", memory);
}
