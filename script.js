
let budgetInput = document.getElementById("budgetInput");
let submitBudget = document.getElementById("submitBudget");
let budgetDisplay = document.getElementById("budgetDisplay");
let header = document.querySelector(".header");
let enterBudgetContainer = document.querySelector(".enterBudget");

submitBudget.addEventListener("submit", (event) => {
    event.preventDefault();

    let budgetEntered = budgetInput.value;
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

let category = document.getElementById("category");
let amountLeftInBudgetSpan = document.getElementById("amountLeftInBudget"); //holds current budget
let entertainmentTotalSpan = document.getElementById("entertainmentTotal");
let totalSpentSpan = document.getElementById("totalSpent");
let foodTotalSpan = document.getElementById("foodTotal");
let clothingTotalSpan = document.getElementById("clothingTotal");
let billsTotalSpan = document.getElementById("billsTotal");

let entertainmentTotal = 0;
let foodTotal = 0;
let clothingTotal = 0;
let billsTotal = 0;
let amountLeftBudget = 0;
let totalSpent = 0;

let mainForm = document.getElementById("mainForm");
let amount = document.getElementById("amount");
let userTotal = 0;// user weekly budget input

let payee = document.getElementById("payee");

mainForm.addEventListener('submit', event => {
    event.preventDefault();

    newEntry = document.getElementById("newEntry");
    let listItem = document.createElement("li");

    if(totalSpent + parseInt(amount.value)<= parseInt(budgetDisplay.innerText)){
    listItem.innerText = payee.value + " | Amount: $" + amount.value + " | Category: " + category.value;
    
    //// test code for new element being added
    

    //listItem.innerHTML = `
    //<span class="listItem">${listItem}</span>
    //<button name="deleteButton"><i class="fas fa-trash"></i></button>`;
    
    
    newEntry.append(listItem);
    };

    if(category.value === "Entertainment"){
        if(parseInt(budgetDisplay.innerText) - totalSpent > 0){
            if(totalSpent + parseInt(amount.value) <= parseInt(budgetDisplay.innerText)){
        totalSpent += parseInt(amount.value);
        totalSpentSpan.innerText = `$${totalSpent}`; 
        amountLeftBudget = parseInt(budgetDisplay.innerText) - totalSpent;
        amountLeftInBudgetSpan.innerText = `$${amountLeftBudget}`;
        entertainmentTotal += parseInt(amount.value);
        entertainmentTotalSpan.innerText = `$${entertainmentTotal}`;
            } else{
                alert("You cannot afford that.")
            }
        } else {
            alert("You dont have any more money!")
            submitListItems.disabled = true;
        }

    
    } else if (category.value === "Food"){
        if(parseInt(budgetDisplay.innerText) - totalSpent > 0){
            if(totalSpent + parseInt(amount.value) <= parseInt(budgetDisplay.innerText)){
                totalSpent += parseInt(amount.value);
                totalSpentSpan.innerText = `$${totalSpent}`; 
                amountLeftBudget = parseInt(budgetDisplay.innerText) - totalSpent;
                amountLeftInBudgetSpan.innerText = `$${amountLeftBudget}`;
                foodTotal += parseInt(amount.value);
                foodTotalSpan.innerText = `$${foodTotal}`;
            } else{
                alert("You cannot afford that.")
            }
        } else {
            alert("You dont have any more money!")
            submitListItems.disabled = true;
        }

    } else if (category.value === "Clothing"){
        if(parseInt(budgetDisplay.innerText) - totalSpent > 0){
            if(totalSpent + parseInt(amount.value) <= parseInt(budgetDisplay.innerText)){
                totalSpent += parseInt(amount.value);
                totalSpentSpan.innerText = `$${totalSpent}`; 
                amountLeftBudget = parseInt(budgetDisplay.innerText) - totalSpent;
                amountLeftInBudgetSpan.innerText = `$${amountLeftBudget}`;
                clothingTotal += parseInt(amount.value);
                clothingTotalSpan.innerText = `$${clothingTotal}`;
            } else{
                alert("You cannot afford that.")
            }
        } else {
            alert("You dont have any more money!")
            submitListItems.disabled = true;
        }

    } else if(category.value === "Bills"){
        if(parseInt(budgetDisplay.innerText) - totalSpent > 0){
            if(totalSpent + parseInt(amount.value) <= parseInt(budgetDisplay.innerText)){
                totalSpent += parseInt(amount.value);
                totalSpentSpan.innerText = `$${totalSpent}`; 
                amountLeftBudget = parseInt(budgetDisplay.innerText) - totalSpent;
                amountLeftInBudgetSpan.innerText = `$${amountLeftBudget}`;
                billsTotal += parseInt(amount.value);
                billsTotalSpan.innerText = `$${billsTotal}`;
            } else{
                alert("You cannot afford that.")
            }
        } else {
            alert("You dont have any more money!")
            submitListItems.disabled = true;
        }
    }
});

///////// show and hide categories

let categoryContainer = document.getElementById("categoryContainer");
let showCategoryTotals = document.querySelector(".showCategoryTotals");
let hideCategoryTotals = document.querySelector(".hideCategoryTotals");

showCategoryTotals.addEventListener("click", () => {
    hideCategoryTotals.classList.add("showCategoryTotals");
    document.querySelector(".showCategoryTotals").style.display = "none";
});

showCategoryTotals.addEventListener("click", () => {
    document.querySelector(".hideCategoryTotals").style.display = "block";
    document.querySelector(".showCategoryTotals").style.display = "none";
});

hideCategoryTotals.addEventListener("click", () => {
    document.querySelector(".showCategoryTotals").style.display = "block";
    document.querySelector(".hideCategoryTotals").style.display = "none";
});



