const convertButton = document.querySelector("#convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectToConvert = document.querySelector(".currency-select-to-convert");


function convertCurrency() {
    const inputCurrencyValue = document.getElementById("input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor 
    const currencyValueConverted = document.querySelector(".currency-value"); // Outros Valores
 
    console.log(inputCurrencyValue)

    const dolartoday = 4.90;
    const eurotoday = 5.30;
    const libratoday = 6.15;
    const bitcointoday = 149333.95;
    const ienetoday = 0.033;
    const realtoday = 1


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

    if (currencySelect.value == "Real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)   
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue / realtoday)

    

    // Alterando os cifrão das moedas de cima 

    if (currencySelectToConvert.value == "Dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolartoday)
    }

    if (currencySelectToConvert.value == "Euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / eurotoday)
    }

    if (currencySelectToConvert.value == "Libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libratoday)
    }

    if (currencySelectToConvert.value == "Bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcointoday)
    }

    if (currencySelectToConvert.value == "Iene") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / ienetoday)
    }

}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");
    const currencyImage02 = document.getElementById("currency-img02")
    const currencyName02 = document.getElementById("currency-name02")


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
        currencyImage.width = 44;
        currencyImage.height = 44;
    }

    if (currencySelect.value == "Real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/Real.png"
    }

    // Mudando o nome e a imagem superior

    if(currencySelectToConvert.value == "Real") {
       currencyName02.innerHTML = "Real Brasileiro"
       currencyImage02.src = "./assets/Real.png"
    }

    if(currencySelectToConvert.value == "Dolar") {
        currencyName02.innerHTML = "Dolar Americano"
        currencyImage02.src = "./assets/Dolar.png"
    }

    if(currencySelectToConvert.value == "Euro") {
        currencyName02.innerHTML = "Euro"
        currencyImage02.src = "./assets/Euro.png"
    }

    if(currencySelectToConvert.value == "Libra") {
        currencyName02.innerHTML = "Libra"
        currencyImage02.src = "./assets/libra.png"
    }

    if(currencySelectToConvert.value == "Bitcoin") {
        currencyName02.innerHTML = "Bitcoin"
        currencyImage02.src = "./assets/bitcoin.png"
    }

    if(currencySelectToConvert.value == "Iene") {
        currencyName02.innerHTML = "Yen"
        currencyImage02.src = "./assets/japan.jpg"
        currencyImage02.width = 44;
        currencyImage02.height = 44;
    }

    convertCurrency()
}


currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener('click', convertCurrency);
currencySelectToConvert.addEventListener("change", changeCurrency);