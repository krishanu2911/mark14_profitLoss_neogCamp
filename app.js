var intialPrice = document.querySelector("#intial-price");
var quantityOfStocks = document.querySelector("#quantity-of-stocks");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputEl = document.querySelector("#output");

submitBtn.addEventListener("click", clickHandler);
function clickHandler (){
    calculateProfitAndLoss(Number(intialPrice.value),Number(quantityOfStocks.value),Number(currentPrice.value));
}

function calculateProfitAndLoss(intial, quantity, current){
    if(intial >current){
        var loss = (intial - current)* quantity;
        var lossPercentage = (loss /intial) *100;
        outputEl.innerText = `hey the loss is ${loss} and the precent is ${lossPercentage}%`;
        console.log(`hey the loss is ${loss} and the precent is ${lossPercentage}`);

    }else if(current> intial){
        var profit = (current - intial) * quantity;
        var profitPercentage = (profit /intial )* 100;
        outputEl.innerText = `hey u have made profit of ${profit} and the precentage is ${profitPercentage}%`;
        console.log(`hey u have made profit of ${profit} and the precentage is ${profitPercentage}%`);

        
    }else{
        outputEl.innerText = "no pain no gain and on gain on pain";
        console.log("no pain no gain and on gain on pain");

    }
}
