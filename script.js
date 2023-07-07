const convertButton = document.querySelector("#convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectToConvert = document.querySelector(
  ".currency-select-to-convert"
);

const dolartoday = 4.9;
const eurotoday = 5.3;
const libratoday = 6.15;
const bitcointoday = 149333.95;
const ienetoday = 0.033;
const realtoday = 1;

/**
 * Function que retorna o valor a ser convertido na moeda selecionada convertido em real
 *
 * @param {number} value Valor a ser convertido
 * @returns Valor em real
 */
function currencyToReal(value) {
  const currency = currencySelectToConvert.value;

  switch (currency) {
    case "Dolar":
      return value * dolartoday;

    case "Euro":
      return value * eurotoday;

    case "Libra":
      return value * libratoday;

    case "Bitcoin":
      return value * bitcointoday;

    case "Iene":
      return value * ienetoday;

    default:
      return value;
  }
}

/**
 * Function que converte o valor das currencies
 */
function convertCurrency() {
  const inputCurrencyValue = document.getElementById("input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); // Valor
  const currencyValueConverted = document.querySelector(".currency-value"); // Outros Valores

  const convertedCurrency = currencyToReal(inputCurrencyValue); // Valor da moeda a ser convertida em real

  switch (currencySelect.value) {
    case "Dolar":
      // se o select estiver selecionado o valor de dolar, entra aqui
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(convertedCurrency / dolartoday);

      break;

    case "Euro":
      // se o select estiver selecionado o valor de euro, entra aqui
      currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(convertedCurrency / eurotoday);

      break;

    case "Libra":
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "GBP",
      }).format(convertedCurrency / libratoday);

      break;

    case "Bitcoin":
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "BTC",
      }).format(convertedCurrency / bitcointoday);

      break;

    case "Iene":
      currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY",
      }).format(convertedCurrency / ienetoday);

      break;

    case "Real":
      currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(convertedCurrency / realtoday);

      break;

    default:
      break;
  }

  // Alterando os cifrão das moedas de cima

  switch (currencySelectToConvert.value) {
    case "Real":
      currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(inputCurrencyValue);

      break;

    case "Dolar":
      currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(inputCurrencyValue);

      break;

    case "Euro":
      currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(inputCurrencyValue);

      break;

    case "Libra":
      currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "GBP",
      }).format(inputCurrencyValue);

      break;

    case "Bitcoin":
      currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "BTC",
      }).format(inputCurrencyValue);

      break;

    case "Iene":
      currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY",
      }).format(inputCurrencyValue);

      break;

    default:
      break;
  }
}

/**
 * Function que muda o nome e a imagem da caixa de cureency
 *
 * @param {string} currency String da currency
 * @param {HTMLParagraphElement} currencyName HTMLParagraphElement do nome da currency
 * @param {HTMLImageElement} currencyImage HTMLImageElement da imagem da currency
 */
function changeCurrency(currency, currencyName, currencyImage) {
  switch (currency) {
    case "Dolar":
      currencyName.innerHTML = "Dólar Americano";
      currencyImage.src = "./assets/Dolar.png";

      break;

    case "Euro":
      currencyName.innerHTML = "Euro";
      currencyImage.src = "./assets/Euro.png";

      break;

    case "Libra":
      currencyName.innerHTML = "Libra";
      currencyImage.src = "./assets/libra.png";

      break;

    case "Bitcoin":
      currencyName.innerHTML = "Bitcoin";
      currencyImage.src = "./assets/bitcoin.png";

      break;

    case "Iene":
      currencyName.innerHTML = "Yen";
      currencyImage.src = "./assets/japan.jpg";
      currencyImage.width = 44;
      currencyImage.height = 44;

      break;

    case "Real":
      currencyName.innerHTML = "Real Brasileiro";
      currencyImage.src = "./assets/Real.png";

      break;

    default:
      break;
  }

  convertCurrency();
}

const currencyName = document.getElementById("currency-name");
const currencyImage = document.querySelector(".currency-img");
const currencyImage02 = document.getElementById("currency-img02");
const currencyName02 = document.getElementById("currency-name02");

currencySelect.addEventListener("change", (event) =>
  changeCurrency(event.currentTarget.value, currencyName, currencyImage)
);
currencySelectToConvert.addEventListener("change", (event) =>
  changeCurrency(event.currentTarget.value, currencyName02, currencyImage02)
);
convertButton.addEventListener("click", convertCurrency);
