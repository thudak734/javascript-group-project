
let budgetInput = document.getElementById("budgetInput");
let submitBudget = document.getElementById("submitBudget");
let budgetDisplay = document.getElementById("budgetDisplay");
let header = document.querySelector(".header");
let enterBudgetContainer = document.querySelector(".enterBudget");

submitBudget.addEventListener("submit", (event) => {
    event.preventDefault();

    let budgetEntered = budgetInput.value;
    console.log(budgetEntered);

    budgetDisplay.innerText = budgetEntered;

    header.classList.add("headerShow");
    enterBudgetContainer.classList.add("enterBudgetHide");
});

let resetButton = document.getElementById("resetBudget")

resetButton.addEventListener("click", () => {
    header.classList.add("header");
    enterBudgetContainer.classList.add("enterBudget");
    window.location.reload();
});



let fillerForBudgetDisplay = document.querySelector('h1'); //to display at top of page



let category = document.getElementById("category");
let amountLeftInBudget = document.getElementById("amountLeftInBudget"); //holds current budget
let entertainmentTotalSpan = document.getElementById("entertainmentTotal");
let totalSpentSpan = document.getElementById("totalSpent");
let foodTotalSpan = document.getElementById("foodTotal");

let entertainmentTotal = 0;
let foodTotal = 0;
let clothingTotal = 0;
let billsTotal = 0;
let currentBudget = 0;
let totalSpent = 0;

let mainForm = document.getElementById("mainForm");
let amount = document.getElementById("amount");
let userTotal = 0;// user weekly budget input


mainForm.addEventListener('submit', event => {
    event.preventDefault();

    // new element being added

    



    // steve's code below


    if(category.value === "Entertainment"){
        currentBudget = budgetInput.value - amount.value;
        entertainmentTotal += parseInt(amount.value);
        entertainmentTotalSpan.innerText = entertainmentTotal;
        totalSpent += parseInt(amount.value);
        totalSpentSpan.innerText = totalSpent;
    } else if (category.value === "Food"){
        currentBudget = budgetInput.value - amount.value;
        foodTotal += parseInt(amount.value);
        foodTotalSpan.innerText = foodTotal;
        totalSpent += parseInt(amount.value);
        totalSpentSpan.innerText = totalSpent;
    }
    


});

