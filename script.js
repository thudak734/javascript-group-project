
let budget = parseInt(prompt("What is your weekly budget?"));


let total = document.getElementById("total");


total.innerText = `Total: $ ${budget}`;

console.log(budget)

let budgetInput = document.getElementById("budgetInput");
budgetInput.innerText = budget;


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

let submitBtn = document.querySelector("button");

let amount = document.getElementById("amount");

let userTotal = 0;// user weekly budget input

submitBtn.addEventListener('submit', (event) => {
    event.preventDefault();

    if(category.value === "Entertainment"){
        currentBudget = budget - amount.value;
        entertainmentTotal += amount.value;
        entertainmentTotalSpan.innerText = entertainmentTotal;
        totalSpent += amount.value;
        totalSpentSpan.innerText = totalSpent;
    } else if (category.value === "Food"){
        currentBudget = budget - amount.value;
        foodTotal += amount.value;
        foodTotalSpan.innerText = foodTotal;
        totalSpent += amount.value;
        totalSpentSpan.innerText = totalSpent;
    }
    


});

