const convertButton = document.querySelector("#convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectToConvert = document.querySelector(".currency-select-to-convert");

function convertCurrency() {
    const inputCurrencyValue = document.getElementById("input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor 
    const currencyValueConverted = document.querySelector(".currency-value"); // Outros Valores


    const dolartoday = 4.90;
    const eurotoday = 5.30;
    const libratoday = 6.15;
    const bitcointoday = 149333.95;
    const ienetoday = 0.033;
    const realtoday = 0.21;


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

    if (currencySelect.value == "Libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libratoday);
    }

    if (currencySelect.value == "Bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcointoday);
    }

    if (currencySelect.value == "Iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / ienetoday);
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
        currencyImage.src = "./assets/Dolar.png"
    }

    if (currencySelect.value == "Euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }

    if (currencySelect.value == "Libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == "Iene") {
        currencyName.innerHTML = "Yen"
        currencyImage.src = "./assets/japan.jpg"
        currencyImage.width =  44;
        currencyImage.heifht = 44;
    }

    if (currencySelect.value == "Real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/Yen.jpg"
    }

    convertCurrency()
}



currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener('click', convertCurrency);