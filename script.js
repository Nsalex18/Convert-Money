const convertButton = document.querySelector("#convert-button");

function convertCurrency(){

    const inputCurrencyValue = document.getElementById("input-currency").value;
    
    const dolartoday = 4.90

    const covertedValue = inputCurrencyValue / dolartoday

    console.log(covertedValue)
}

convertButton.addEventListener('click', convertCurrency);