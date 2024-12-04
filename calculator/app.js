
let displayValue = document.getElementById("displayValue");

function btn(value) {
    displayValue.value += value;
}

function clearDisplay() {
    displayValue.value = "";
    displayResult.value = "0";
}

function remove() {
    displayValue.value = displayValue.value.slice(0, -1);
}

function equals() {
try {
    displayResult.value = eval(displayValue.value);
}  catch (error) {
    displayValue.value = "Error";
    displayResult.value = "0";
}
if (displayResult.value == "undefined" || displayValue.value === "Error"){
    displayResult.value = '0';
}
}

// // THIS IS FOR KEYBOARD INPUT

document.addEventListener("keydown", (event) => {
const key = event.key;
if (key >= "0" && key <= "9") {
    btn(key);
} else if (key === ".") {
    btn(".");
} else if (key === "+") {
    btn("+");
} else if (key === "-") {
    btn("-");
} else if (key === "*") {
    btn("*");
} else if (key === "/") {
    btn("/");
} else if (key === "%") {
    btn("%");
} else if (key === "Enter") {
    equals();
} else if (key === "=") {
    equals();
} else if (key === "Backspace") {
    remove();
} else if (key === "Escape") {
    clearDisplay();
}
});
