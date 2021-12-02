
let budget = parseInt(prompt("What is your weekly budget?"));
console.log(budget)

let budgetInput = document.getElementById("budgetInput");
budgetInput.innerText = budget;

let fillerForBudgetDisplay = document.querySelector('h1'); //to display at top of page

let category = document.getElementById("category");
let amountLeftInBudget = document.getElementById("amountLeftInBudget"); //holds current budget
let entertainmentTotalSpan = document.getElementById("entertainmentTotal");
let totalSpentSpan = document.getElementById("totalSpent");
let entertainmentTotal = 0;
let foodTotal = 0;
let clothingTotal = 0;
let billsTotal = 0;
let currentBudget = 0;
let totalSpent = 0;

let submitBtn = document.getElementById("submitBtn");

let amount = document.getElementById("amount");

let userTotal = 0;// user weekly budget input

submitBtn.addEventListener('submit', event => {
    event.preventDefault();

    if(category.value === "Entertainment"){
        currentBudget = budget - amount.value;
        entertainmentTotal += amount.value;
        entertainmentTotalSpan.innerText = entertainmentTotal;
        totalSpent += amount.value;
        totalSpentSpan.innerText = totalSpent;
    }
    


});

