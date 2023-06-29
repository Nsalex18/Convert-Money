const convertButton = document.querySelector("#convert-button");
const currencySelect = document.querySelector(".currency-select")

function convertCurrency() {
    const inputCurrencyValue = document.getElementById("input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor real
    const currencyValueConverted = document.querySelector(".currency-value"); // Outros Valores
    
    console.log(currencySelect.value)
    const dolartoday = 4.90;
    const eurotoday = 5.30;

    if(currencySelect.value == "Dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolartoday);
    }
    
    if(currencySelect.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / eurotoday);
        
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency:"BRL"
    }).format(inputCurrencyValue);

    
    
}

convertButton.addEventListener('click', convertCurrency);