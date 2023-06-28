const convertButton = document.querySelector("#convert-button");

function convertCurrency() {
    const inputCurrencyValue = document.getElementById("input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor real
    const currencyValueConverted = document.querySelector(".currency-value"); // Outros Valores
    
    const dolartoday = 4.90;

    const convertedValue = inputCurrencyValue / dolartoday;

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency:"BRL"
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedValue);
    

    console.log(convertedValue);
}

convertButton.addEventListener('click', convertCurrency);