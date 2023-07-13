/**
 * Object para cada currency tendo sua taxa de conversao, seu locales,
 * o nome da currency, o nome completo e o caminho da imagem
 */
const currencyLibrary = {
  Real: {
    conversionRate: 1,
    locales: "pt-BR",
    currency: "BRL",
    name: "Real Brasileiro",
    imagePath: "./assets/Real.png",
  },
  Dolar: {
    conversionRate: 4.9,
    locales: "en-US",
    currency: "USD",
    name: "Dólar Americano",
    imagePath: "./assets/Dolar.png",
  },
  Euro: {
    conversionRate: 5.3,
    locales: "de-DE",
    currency: "EUR",
    name: "Euro",
    imagePath: "./assets/Euro.png",
  },
  Libra: {
    conversionRate: 6.15,
    locales: "en-UK",
    currency: "GBP",
    name: "Libra",
    imagePath: "./assets/Libra.png",
  },
  Bitcoin: {
    conversionRate: 149333.95,
    locales: "en-UK",
    currency: "BTC",
    name: "Bitcoin",
    imagePath: "./assets/Bitcoin.png",
  },
  Iene: {
    conversionRate: 0.033,
    locales: "ja-JP",
    currency: "JPY",
    name: "Yen",
    imagePath: "./assets/Japan.jpg",
  },
};

const convertButton = document.querySelector("#convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectToConvert = document.querySelector(
  ".currency-select-to-convert"
);

/**
 * Function que retorna o valor a ser convertido na moeda selecionada convertido em real
 *
 * @param {number} value Valor a ser convertido
 * @returns Valor em real
 */
function currencyToReal(value) {
  const currency = currencySelectToConvert.value;

  return currencyLibrary[currency].conversionRate * value;
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

  const currency = currencySelect.value;
  const currencyToConvert = currencySelectToConvert.value;
  const convertedCurrency = currencyToReal(inputCurrencyValue); // Valor da moeda a ser convertida em real

  currencyValueConverted.innerHTML = new Intl.NumberFormat(
    currencyLibrary[currency].locales,
    {
      style: "currency",
      currency: currencyLibrary[currency].currency,
    }
  ).format(convertedCurrency / currencyLibrary[currency].conversionRate);

  // Alterando os cifrão das moedas de cima

  currencyValueToConvert.innerHTML = new Intl.NumberFormat(
    currencyLibrary[currencyToConvert].locales,
    {
      style: "currency",
      currency: currencyLibrary[currencyToConvert].currency,
    }
  ).format(inputCurrencyValue);
}

/**
 * Function que muda o nome e a imagem da caixa de cureency
 *
 * @param {string} currency String da currency
 * @param {HTMLParagraphElement} currencyName HTMLParagraphElement do nome da currency
 * @param {HTMLImageElement} currencyImage HTMLImageElement da imagem da currency
 */
function changeCurrency(currency, currencyName, currencyImage) {
  currencyName.innerHTML = currencyLibrary[currency].name;
  currencyImage.src = currencyLibrary[currency].imagePath;

  if (currency === "Iene") {
    currencyImage.width = 44;
    currencyImage.height = 44;
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
