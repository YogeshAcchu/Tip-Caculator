const billInput = document.querySelector('.bill-input');
const peopleInput = document.querySelector('.people-input');
const tipPerPerson = document.getElementById('tip-amount');
const totalPerPerson = document.getElementById('total-amount');
 
const tips = document.querySelectorAll(".tips");
const tipCustom = document.querySelector(".tip-custom");
const resetButton = document.querySelector(".reset");

const error = document.querySelector(".error");

billInput.addEventListener('input', billInputFunction);
peopleInput.addEventListener('input', peopleInputFunction);

tipCustom.addEventListener('input', tipInputFunction);

resetButton.addEventListener('click', reset);
 
billInput.value = "0.0";
peopleInput.value = "1";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

tips.forEach(function(val) {
    val.addEventListener('click', handelClick);
});


function billInputFunction() {
    billValue = parseFloat(billInput.value);
    // console.log(billValue);
    calculateTip();
}

function peopleInputFunction() {
    peopleValue = parseFloat(peopleInput.value);
    // console.log(peopleValue);
    
    if(peopleValue < 1){
        error.style.display = "flex";
        peopleInput.style.border = "2px solid red";
    }else{
        error.style.display = "none";
        peopleInput.style.border = "none";
        calculateTip();

    }
}

function tipInputFunction() {
    tipValue = parseFloat(tipCustom.value / 100);
    tips.forEach(function (val) {
        val.classList.remove("active-tip");
    });
    calculateTip();
}

function handelClick(event) {
    tips.forEach(function(val) {
        val.classList.remove("active-tip");
        if (event.target.innerHTML == val.innerHTML) {
            val.classList.add("active-tip");
            tipValue = parseFloat(val.innerHTML) / 100;
        }
    });
    calculateTip();
    // console.log(tipValue);
}

function calculateTip() {
    if (peopleValue >= 1) {
        let tipAmount = (billValue * tipValue) / peopleValue;
        console.log(tipAmount);
        let total = (billValue + tipAmount) / peopleValue;
        tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
        totalPerPerson.innerHTML = "$" + total.toFixed(2);
    }
} 

function reset() {
    billInput.value = "0.0";
    billInputFunction();
    peopleInput.value = "1";
    peopleInputFunction();
    tipCustom.value = "";
}












