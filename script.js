const convertButton = document.querySelector("#convert-button");
const currencySelect = document.querySelector(".currency-select")

function convertCurrency() {
    const inputCurrencyValue = document.getElementById("input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor real
    const currencyValueConverted = document.querySelector(".currency-value"); // Outros Valores

    console.log(currencySelect.value)
    const dolartoday = 4.90;
    const eurotoday = 5.30;

    if (currencySelect.value == "Dolar") {  // se o select estiver selecionado o valor de dolar, entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolartoday);
    }

    if (currencySelect.value == "Euro") { // se o select estiver selecionado o valor de euro, entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / eurotoday);

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "Dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/assets/dolar.png"
    }

    if (currencySelect.value == "Euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/assets/euro.png"
    }

    convertCurrency()
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener('click', convertCurrency);