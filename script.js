
let budget = parseInt(prompt("What is your weekly budget?"));
console.log(budget)

let budgetInput = document.getElementById("budgetInput");
budgetInput.innerText = budget;


let fillerForBudgetDisplay = document.querySelector('h1'); //to display at top of page


let entertainment = document.getElementById("entertainment");
let food = document.getElementById("food");
let clothing = document.getElementById("clothing");
let bills = document.getElementById("bills");
let misc = document.getElementById("misc");

let submitBtn = document.querySelector("button");

let expenditure = document.getElementById("priceInput");
let userTotal = 0;// user weekly budget input

submitBtn.addEventListener('submit', () => {
    


});

