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
    if(intial>0 & quantity > 0 & current > 0){
        if(intial >current){
            var loss = (intial - current)* quantity;
            var lossprice = intial - current;
            var lossPercentage = (lossprice /intial) *100;
            outputEl.innerText = `Hey the loss is ${loss} and the precent is ${lossPercentage}% 📉📉📉`;
            console.log(`Hey the loss is ${loss} and the precent is ${lossPercentage}`);
    
        }else if(current> intial){
            var profit = (current - intial) * quantity;
            var profitprice = current - intial;
            var profitPercentage = (profitprice /intial )* 100;
            outputEl.innerText = `Hey u have made profit of ${profit} and the precentage is ${profitPercentage}% 📈📈📈`;
            console.log(`hey u have made profit of ${profit} and the precentage is ${profitPercentage}%`);
    
            
        }else{
            outputEl.innerText = "no pain no gain and on gain on pain 😂";
            console.log("no pain no gain and on gain on pain");
    
        }
    }else{
        outputEl.innerText = "please enter positive and valid input";
    }
    
}
